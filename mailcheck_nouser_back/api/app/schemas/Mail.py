from pydantic import BaseModel
from datetime import datetime
class Mail(BaseModel):
    From:str
    Subject:str
    Body:str
    Date:datetime
