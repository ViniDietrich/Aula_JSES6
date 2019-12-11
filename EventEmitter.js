// Event Emitter - Exclusivo node

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
};

const users = new Users();

// on - todos, once - somente o primeiro

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Vinicius Dietrich' });
users.userLogged({ user: 'Gabriel Dietrich' });
