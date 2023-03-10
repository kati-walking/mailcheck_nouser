from sqlalchemy import Column,Integer,String,DATETIME,ForeignKey,TIMESTAMP
from database import Base
from datetime import datetime
class MailDate(Base):
    __tablename__='maildate'
    id = Column(Integer,primary_key=True,index=True)
    mail_id = Column(Integer,ForeignKey('mail.id'))
    Date = Column(TIMESTAMP)

    def __init__(self,mail_id:int,Date:datetime):
        self.mail_id=mail_id
        self.Date = Date
    def __str__(self):
        return str(self.id)+':'+str(self.mail_id)+':'+str(self.Date)