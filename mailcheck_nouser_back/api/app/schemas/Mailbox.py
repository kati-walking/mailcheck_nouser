from pydantic import BaseModel
from datetime import datetime 
class Mailbox(BaseModel):
    mailadress:str
    token:str
    last_update:datetime