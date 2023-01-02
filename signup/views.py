from django.shortcuts import render
import mysql.connector as sql

fn = ''
ln = ''
s = ''
em = ''
pwd = ''


# Create your views here.
def signup_page(request):
    global firstName, lastName,email, password,role
    if request.method == "POST":
        m = sql.connect(host="localhost", user="ayda_alm", passwd="Neg@R*74*80", database='localhost')
        cursor = m.cursor()
        d = request.POST
        for key, value in d.items():
            if key == "first_name":
                firstName = value
            if key == "last_name":
                lastName = value
            if key == "role":
                role = value
            if key == "email":
                email = value
            if key == "password":
                password = value

        c = "insert into users Values('{}','{}','{}','{}','{}')".format(firstName, lastName,email, password,role)
        cursor.execute(c)
        m.commit()

    return render(request, 'signup.html')
