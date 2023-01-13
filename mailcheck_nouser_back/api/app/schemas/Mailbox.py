from pydantic import BaseModel
from datetime import datetime 
class Mailbox(BaseModel):
    user_id:int
    mailadress:str
    token:str
    last_update:datetime