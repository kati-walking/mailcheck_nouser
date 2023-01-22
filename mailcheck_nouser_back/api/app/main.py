import os
from schemas.Mailbox import Mailbox
from schemas.Event import Event
from schemas.Mail import Mail
from fastapi import FastAPI,Depends,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

from typing import List
import database
##import models.user
import models.mail
import models.mailbox
import models.maildate
from sqlalchemy.orm import session

from datetime import date, datetime, timedelta
import re


from mailcheck import Get_Mails

app = FastAPI()
origins =[
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return(os.environ['DB_USER'])


@app.get("/Events",response_model=List[Event])
def get_events(
    db:session=Depends(database.get_db)
):
    db_events = db.query(models.mailbox.Mailbox,models.mail.Mail.Subject,models.maildate.MailDate.Date)\
        .join(models.mail.Mail,models.mailbox.Mailbox.id==models.mail.Mail.mailbox_id)\
            .join(models.maildate.MailDate,models.mail.Mail.id==models.maildate.MailDate.mail_id)\
                .all()
    events=[]
    for event in db_events:
        events.append({
            "title":event.Subject,
            "start":event.Date
        })
    return events

@app.get("/Mails/{date}",response_model=List[Mail])
def get_mails(
    date:datetime,
    db:session=Depends(database.get_db)
):
    print(date)
    Mails=[]
    db_mails=db.query(models.mail.Mail)\
        .join(models.maildate.MailDate,models.mail.Mail.id==models.maildate.MailDate.mail_id)\
            .filter(models.maildate.MailDate.Date==date)\
                .all()
    for mail in db_mails:
        Mails.append({
            "id":mail.id,
            "From":mail.From,
            "Subject":mail.Subject,
            "Body":mail.Body,
        })
    return Mails


@app.post("/mailbox")
def create_mailbox(
    mailbox:Mailbox,
    db: session=Depends(database.get_db)
):
    already_mailbox = db.query(models.mailbox.Mailbox)\
        .filter(models.mailbox.Mailbox.mailadress==mailbox.mailadress)\
            .first()
    if not already_mailbox is None:
        raise HTTPException(status_code=400,detail="mailadress already registed")
    new_mailbox = models.mailbox.Mailbox(
        mailadress = mailbox.mailadress,
        token = mailbox.token
    )
    try:
        print("try")
        mails = Get_Mails(mailbox.mailadress,mailbox.token,datetime.today()-timedelta(days=30))
    except Exception:
        print(Exception)
        raise HTTPException(status_code=400,detail="token uncorrect!!!")
    #mails = Get_Mails(mailbox.mailadress,mailbox.token,datetime.today()-timedelta(days=30))
    db.add(new_mailbox)
    db.commit()

    db_mailbox = db.query(models.mailbox.Mailbox).filter(models.mailbox.Mailbox.mailadress==mailbox.mailadress).first()

    
    seiki = "([0]?[1-9]|[1][0-2])[/\-月]([0]?[1-9]|[12][0-9]|[3][01])日"
    FROM = 0
    FROM_Adress=1
    SUBJECT = 2
    SEND_DATE = 3
    BODY = 4
    DATE = 5

    # 日付が入っているもののみ抽出
    mails_hasDate = []
    for mail in mails:
        #print(mail[BODY])
        if re.search(seiki,mail[BODY]):
            #print("match")
            mails_hasDate.append(mail)
    #print(len(mails_hasDate))


    for mail in mails_hasDate:
        #print(mail)
        datelist = re.findall(seiki,mail[BODY])
        #print("datelist")
        #print(datelist)
        new_mail= models.mail.Mail(
                mailbox_id=db_mailbox.id,
                From=mail[FROM],
                Subjext=mail[SUBJECT],
                Body=mail[BODY]
            )
        db.add(new_mail)
        db.commit()
        db_mail = db.query(models.mail.Mail).filter(models.mail.Mail.Subject==mail[SUBJECT]).first()
        for d in datelist:
            #print(d)
            #dateをdate型に変換
            year = 2022
            if int(d[0]) < 10:
                year=2023
            datedata = date(year,int(d[0]),int(d[1]))
            new_maildate=models.maildate.MailDate(
                mail_id=db_mail.id,
                Date=datedata
            )
            db.add(new_maildate)
            db.commit()
    db.commit()
    
    return()