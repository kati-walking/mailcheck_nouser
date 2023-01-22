from sqlalchemy import Column,Integer,String,DATETIME,ForeignKey,TIMESTAMP
from database import Base
from datetime import datetime
class Mailbox(Base):
    __tablename__='mailbox'
    id = Column(Integer,primary_key=True,index=True)
    mailadress = Column(String(128),nullable=False)
    token = Column(String(128),nullable = False)
    last_update = Column(TIMESTAMP,default=datetime.now(),nullable=False)

    def __init__(self,mailadress:str,token:str):
        self.mailadress=mailadress
        self.token=token

    def __str__(self):
        return str(self.id)+':'+str(self.user_id)+':'+self.mailadress
