from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'niekniek'
app.config['MYSQL_DATABASE_DB'] = 'button_logging'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3308
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['CORS_ALLOW_ORIGIN'] = "*,*"
app.config['CORS_EXPOSE_HEADERS'] = "*,*"
app.config['CORS_ALLOW_HEADERS'] = "content-type,*"

mysql.init_app(app)
