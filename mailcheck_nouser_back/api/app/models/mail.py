from sqlalchemy import Column,Integer,String,ForeignKey,Boolean
from database import Base
from datetime import datetime
class Mail(Base):
    __tablename__='mail'
    id = Column(Integer,primary_key=True,index=True)
    mailbox_id=Column(Integer,ForeignKey('mailbox.id'))
    From = Column(String(128),nullable=False)
    Subject = Column(String(128),nullable=False)
    Body = Column(String(8000))
    isView=Column(Boolean(),default=True)

    def __init__(self,mailbox_id:int,From:str,Subjext:str,Body:str):
        self.mailbox_id=mailbox_id
        self.From=From
        self.Subject=Subjext
        self.Body=Body
        self.isView=True()
    def __str__(self):
        return str(self.id)+':'+str(self.Subject)
    