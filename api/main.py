import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import flash, request
from flask_cors import CORS

@app.route('/create', methods=['POST'])
def create_emp():
    try:        
        _json = request.json
        print("gelukt")
        _ip = _json['ip']
        _buttonid = _json['buttonid']

        if _ip and _buttonid and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)		
            sqlQuery = "INSERT INTO button_logging(ip, buttonid) VALUES(%s, %s)"
            bindData = (_ip, _buttonid)            
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('button logged!')
            respone.status_code = 200
            
            return respone
        else:
            return showMessage()
            
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()          

@app.route('/button')
def button():
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT ip, buttonid FROM button_logging")
        empRows = cursor.fetchall()
        respone = jsonify(empRows)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close()  

@app.route('/button/')
def emp_details(emp_id):
    try:
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT ip, buttonid FROM emp WHERE id =%s", emp_id)
        empRow = cursor.fetchone()
        respone = jsonify(empRow)
        respone.status_code = 200
        return respone
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

@app.route('/update', methods=['PUT'])
def update_emp():
    try:
        _json = request.json
        _ip = _json['ip']
        _buttonid = _json['buttonid']
        _id = _json['id']
        if _ip and _buttonid and request.method == 'PUT':			
            sqlQuery = "UPDATE button_logging SET ip=%s, buttonid=%s WHERE id=%s"
            bindData = (_ip, _buttonid, _id)
            conn = mysql.connect()
            cursor = conn.cursor()
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            respone = jsonify('buttonid updated successfully!')
            respone.status_code = 200
            return respone
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close() 
        conn.close() 

@app.route('/delete/', methods=['DELETE'])
def delete_emp(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM button_logging WHERE id =%s", (id,))
		conn.commit()
		respone = jsonify('buttonid deleted successfully!')
		respone.status_code = 200
		return respone
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
        
       
@app.errorhandler(404)
def showMessage(error=None):
    message = {
        'status': 404,
        'message': 'Record not found: ' + request.url,
    }
    respone = jsonify(message)
    respone.status_code = 404
    return respone
        
if __name__ == "__main__":
    app.run(port=8181)