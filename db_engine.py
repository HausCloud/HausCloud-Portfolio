"Database engine for interactions with remote Amazon RDS"
import psycopg2
import uuid
import json


class Database:
    def __init__(self, **kwargs):
        self.host = kwargs['host']
        self.username = kwargs['username']
        self.password = kwargs['password']
        self.port = kwargs['port']
        self.dbname = kwargs['dbname']
        self.conn = None
        self.cursor = None

    def connect(self):
        'Method to create database connection'
        if self.conn is None:
            try:
                self.conn = psycopg2.connect(
                    host=self.host, user=self.username, password=self.password, port=self.port, dbname=self.dbname, connect_timeout=5)
                self.cursor = self.conn.cursor()
                return True
            except psycopg2.OperationalError as err:
                self.conn = None
                self.cursor = None
                return {'op_error': str(err)}

    def close(self):
        'Method to close database connection'
        if self.conn is not None:
            self.conn.close()
            self.conn = None
        if self.cursor is not None:
            self.cursor.close()
            self.cursor = None

    def exist(self, user_id):
        'Method to check if user exist in database'
        if self.conn is not None and self.cursor is not None:
            exist_statement = "SELECT user_id FROM journals WHERE user_id = %s;"

            try:
                self.cursor.execute(exist_statement, (user_id,))
                if self.cursor.rowcount != 1:
                    return {'nouser_error': 'User {} not in DB'.format(user_id)}
                return True
            except psycopg2.errors.InFailedSqlTransaction as err:
                return {'fail_transaction_error': str(err)}
            except psycopg2.errors.SyntaxError as err:
                return {'syntax_error': str(err)}
            except psycopg2.DatabaseError as err:
                return {'db_error': str(err)}
        # return {'misc_error': 'Connection is unestablished or cursor is was not created'}

    def create(self, user_id):
        'Method to create user'
        create_statement = "INSERT INTO journals (user_id) VALUES (%s);"

        try:
            self.cursor.execute(create_statement, (user_id,))
            self.conn.commit()
            return True
        except psycopg2.errors.InFailedSqlTransaction as err:
            return {'fail_transaction_error': str(err)}
        except psycopg2.errors.SyntaxError as err:
            return {'syntax_error': str(err)}
        except psycopg2.DatabaseError as err:
            return {'db_error': str(err)}

    def add(self, user_id, text, mood, date):
        'Method to see entry for id'
        entry = json.dumps({'text': text, 'mood': mood, 'date': date})
        key = '{' + str(uuid.uuid4()) + '}'
        add_statement = "UPDATE journals SET entries = jsonb_set(entries, %s, %s) WHERE user_id = %s;"

        try:
            self.cursor.execute(add_statement, (key, entry, user_id))
            if self.cursor.rowcount != 1:
                return False
            self.conn.commit()
            return True
        except psycopg2.errors.InFailedSqlTransaction as err:
            return {'fail_transaction_error': str(err)}
        except psycopg2.errors.SyntaxError as err:
            return {'syntax_error': str(err)}
        except psycopg2.DatabaseError as err:
            return {'db_error': str(err)}

    def delete(self, user_id, entry_id):
        'Method to delete an entry'
        delete_statement = "UPDATE journals SET entries = entries - %s WHERE user_id = %s;"

        try:
            self.cursor.execute(delete_statement, (entry_id, user_id))
            self.conn.commit()
            return True
        except psycopg2.errors.InFailedSqlTransaction as err:
            return {'fail_transaction_error': str(err)}
        except psycopg2.errors.SyntaxError as err:
            return {'syntax_error': str(err)}
        except psycopg2.DatabaseError as err:
            return {'db_error': str(err)}

    # def wipe(self, user_id):
    #     wipe_statement = "UPDATE journals SET entries = '{}' WHERE user_id = %s;"

    #     try:
    #         self.cursor.execute(wipe_statement, (user_id,))
    #         self.conn.commit()
    #         return True
    #     except psycopg2.errors.InFailedSqlTransaction as err:
    #         return {'fail_transaction_error': str(err)}
    #     except psycopg2.errors.SyntaxError as err:
    #         return {'syntax_error': str(err)}
    #     except psycopg2.DatabaseError as err:
    #         return {'db_error': str(err)}

    def all_entries(self, user_id):
        'Method to grab all entries for corresponding user'
        
        all_statement = 'SELECT entries FROM journals WHERE user_id = %s;'
        try:
            self.cursor.execute(all_statement, (user_id,))
            return self.cursor.fetchone()[0]
        except psycopg2.errors.InFailedSqlTransaction as err:
            return {'fail_transaction_error': str(err)}
        except psycopg2.errors.SyntaxError as err:
            return {'syntax_error': str(err)}
        except psycopg2.DatabaseError as err:
            return {'db_error': str(err)}
