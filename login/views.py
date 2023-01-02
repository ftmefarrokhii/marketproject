from django.shortcuts import render
import mysql.connector as sql

email = ''
password = ''

def login_page(request):
    global email, password
    if request.method == "POST":
        m = sql.connect(host="localhost", user="ayda_alm", passwd="Neg@R*74*80", database='localhost')
        cursor = m.cursor()
        d = request.POST
        for key, value in d.items():
            if key == "email":
                email = value
            if key == "password":
                password = value

        c = "select * from users where email='{}' and password='{}'".format(email, password)
        cursor.execute(c)
        t = tuple(cursor.fetchall())
        if t == ():
            return render(request, 'error.html')
        else:
            return render(request, "welcome.html")

    return render(request, 'login.html')

