from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'sql11497267'
app.config['MYSQL_DATABASE_PASSWORD'] = 'K6NWAtiWkH'
app.config['MYSQL_DATABASE_DB'] = 'sql11497267'
app.config['MYSQL_DATABASE_HOST'] = 'sql11.freemysqlhosting.net'
app.config['MYSQL_DATABASE_PORT'] = 3306
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
mysql.init_app(app)