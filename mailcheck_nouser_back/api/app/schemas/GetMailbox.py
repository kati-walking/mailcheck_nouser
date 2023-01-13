from pydantic import BaseModel
import Mailbox

class GetMailbox(Mailbox):
    id:int
    class Config:
        orm_mode=True