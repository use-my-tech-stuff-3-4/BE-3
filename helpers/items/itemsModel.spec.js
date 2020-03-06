const db = require('../../data/dbConfig');
const users = require('../users/usersModel');


describe('users model', () => {
    beforeEach(async () => {
        await db("users").truncate();
    });

    afterEach(async () => {
        await db("users").truncate();
    });

    const mockUser = {
        username: "Stan12", 
        password: "Stan12345", 
        email: "Stan13@gmail.com", 
        firstname: "Stan", 
        lastname: "ann", 
        phone: "1234567", 
        address: "1234567"
    }
 
    describe('findBy()', () => {
        it('finds the user by the correct parameter', async () => {
            await users.add(mockUser);

            let foundUser = await users.findBy({ username: mockUser.username });
            expect(foundUser.email).toEqual(mockUser.email);
        })
    });

    describe('add()', () => {
        it('should add a new user to the db', async () => {
            await users.add(mockUser);
            const user = await db('users');
            expect(user).toHaveLength(1);
        })
        it('should add user and return created user with correct parameters', async () => {
            const newUser = await users.add(mockUser);
            expect(newUser.username).toEqual(mockUser.username);
        })
    });

    describe('findById(id)', () => {
        it('finds a user by its given id', async () => {
            const newUser = await users.add(mockUser);
            const foundUser = await users.findById(newUser.id);
            expect(foundUser.username).toEqual(newUser.username);
        })
    })
})