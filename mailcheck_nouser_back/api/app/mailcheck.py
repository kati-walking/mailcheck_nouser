import unicodedata
import imapclient
from backports import ssl
from OpenSSL import SSL
from datetime import date, datetime, timedelta
import pyzmail
import re

def Get_Mails(my_mail,app_password,time):
    print("getmail")
    # SSL暗号化
    context = ssl.SSLContext(SSL.TLSv1_2_METHOD)

    
    # IMAP接続用のオブジェクト作成
    imap = imapclient.IMAPClient("imap.gmail.com",ssl=True,ssl_context=context)

    # IMAPサーバーログイン
    try:
        login_status=imap.login(my_mail,app_password)
    except Exception:
        raise(Exception)
    #print('login status'+login_status)
    # メールフォルダ一覧
    #print(imap.list_folders())

    # INBOXを対象
    try:
        select_folder=imap.select_folder("INBOX",readonly=True)
    except Exception:
        raise("select_folder"+Exception)
    # 検索キーワード設定＆メールID検索
    try:
        KWD = imap.search(["SINCE", time])
    except Exception:
        raise("KWD"+Exception)
    # メールID->メール本文取得
    try:
        raw_message = imap.fetch(KWD,["BODY[]"])
    except Exception:
        raise("message"+Exception)


    # 解析メールの結果保存用
    FromName_list =[]
    FromAdress_list=[]
    Cc_list = []
    Bcc_list = []
    Date_list = []
    Subject_list = []
    Body_list = []

    # 検索結果
    for j in range(len(KWD)):
        # 特定メール取得
        # PyzMessageオブジェクトを返している
        # message:PyzMessage class
        message = pyzmail.PyzMessage.factory(raw_message[KWD[j]][b"BODY[]"])
        # 宛先取得
        From = message.get_addresses("from")

        Cc = message.get_addresses("cc")

        Bcc = message.get_addresses("bcc")

        Date = message.get_addresses("Date")
        # 件名取得
        Subject = message.get_subject()
        #print(Subject)

        # 本文取得
        Bodypart = message.text_part
        #print(Bodypart)
        #一致させたいのでBodyがある場合に一括で
        if Bodypart is not None:
            try:
                Body = Bodypart.get_payload().decode()
            except Exception:
                continue
            Body = unicodedata.normalize("NFKC",Body)
            if len(Body) > 2000:
                Body = Body[:2000]
            #print(Body)
            FromName_list.append(From[0][1])
            FromAdress_list.append(From[0][0])
            Cc_list.append(Cc)
            Bcc_list.append(Bcc)
            Date_list.append(Date)
            Subject_list.append(Subject)
            Body_list.append(Body)


    # メールの解析
    Mail = []
    for i in range(len(FromName_list)):
        Mail.append([FromName_list[i],FromAdress_list[i],Subject_list[i],Date_list[i],Body_list[i]])

    #print(Mail)
    # 接続を遮断
    #imap.logout()
    return Mail
