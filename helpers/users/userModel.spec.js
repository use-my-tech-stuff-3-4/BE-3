const db = require('../../data/dbConfig');
const users = require('./usersModel');

describe('users model', () => {
    beforeEach(async () => {
        await db("users").truncate();
    });
    afterEach(async () => {
        await db("users").truncate();
    });

    const mockUser = {
        username: "Patty", 
        password: "password", 
        email: "patty@gmail.com", 
        firstname: "Patty", 
        lastname: "D", 
        phone: "1234567", 
        address: "1234567"
    }

    describe('findBy()', () => {
        it('finds the user by the correct param', async () => {
            await users.add(mockUser);

            let foundUser = await users.findBy({ username: mockUser.username });
            expect(foundUser.email).toEqual(mockUser.email);
        })
    });
    describe('add()', () => {
        it('should add a new user', async () => {
            await users.add(mockUser);
            const user = await db('users');
            expect(user).toHaveLength(1);
        })
        it('should add user and return created user with correct params', async () => {
            const newUser = await users.add(mockUser);
            expect(newUser.username).toEqual(mockUser.username);
        })
    });
    describe('findById(id)', () => {
        it('finds a user by id', async () => {
            const newUser = await users.add(mockUser);
            const foundUser = await users.findById(newUser.id);
            expect(foundUser.username).toEqual(newUser.username);
        })
    })
})