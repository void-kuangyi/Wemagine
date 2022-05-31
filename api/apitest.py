import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="niekniek",
  database="button_logging",
  port="3308"
)

mycursor = mydb.cursor()

sql = "INSERT INTO button_logging (ip, buttonid) VALUES (%s, %s)"
val = ("3", "3")
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")