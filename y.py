# def battle(user1, user2):
#     while user1['health'] > 0 and user2['health'] > 0:
#         # User 1 attacks User 2
#         user2['health'] -= user1['attack']
#         if user2['health'] <= 0:
#             user2['health'] = 0
#             print(f"{user1['name']} wins the battle!")
#             break

#         # User 2 attacks User 1
#         user1['health'] -= user2['attack']
#         if user1['health'] <= 0:
#             user1['health'] = 0
#             print(f"{user2['name']} wins the battle!")
#             break

#     print(f"{user1['name']} Health: {user1['health']}")
#     print(f"{user2['name']} Health: {user2['health']}")

# user1={ 'name' : 'sara1', 'attack':20, 'health':100}
# user2={ 'name' : 'jo2', 'attack':15, 'health':120}

# battle(user1,user2)




def battle2(user1, user2):
    while user1['health'] > 0 and user2['health'] > 0:
        # User 1 attacks User 2
        user2['health'] -= user1['attack']
        if user2['health'] <= 0:
            user2['health'] = 0
            print(f"{user1['name']} wins the battle!")
            break

        # User 2 attacks User 1
        user1['health'] -= user2['attack']
        if user1['health'] <= 0:
            user1['health'] = 0
            print(f"{user2['name']} wins the battle!")
            break

    print(f"{user1['name']} Health: {user1['health']}")
    print(f"{user2['name']} Health: {user2['health']}")

user1 = {'name': 'JO', 'health': 100, 'attack': 20}
user2 = {'name': 'ADAM', 'health': 120, 'attack': 15}

battle2(user1, user2)