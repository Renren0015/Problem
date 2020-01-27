print('\'Welcome to grading system\'\n')
print('\"Input your name and your grades\"\n')
name = input('Input your name:')
grd = int(input('Input your grade in English:'))
grd1 = int(input('Input your grade in Math:'))
grd2 = int(input('Input your grade in Science:'))
grd3 = int(input('Input your grade in Economics:'))
grd4 = int(input('Input your grade in Filipino:'))
print('\n')
print('\n')
print('\n')

print('Your name is ' + name.capitalize())
print(str('Your grade in English is ') + str(grd))
print(str('Your grade in Math is ') + str(grd1))
print(str('Your grade in Science is ') + str(grd2))
print(str('Your grade in Economics is ') + str(grd3))
print(str('Your grade in Filipino is ') + str(grd4))
plus = grd + grd1 + grd2 + grd3 + grd4
avg = plus / float(5)
print('\n')
print('Your average is ' + str(avg))


