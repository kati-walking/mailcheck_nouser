from datetime import datetime
from pydantic import BaseModel
class Event(BaseModel):
    title:str
    start:datetime
    allDay:bool