from pydantic import BaseModel
from datetime import datetime
class Mail(BaseModel):
    id:int
    From:str
    Subject:str
    Body:str

