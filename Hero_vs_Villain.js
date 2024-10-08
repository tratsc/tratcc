class Characteristic {
    constructor(namee, weapon) {
        this.namee = namee;
        this.weapon = weapon;
        this.hit = 0;
        this.health = 100; // Начальное значение здоровья
    }

    hi() {
        var crit = Math.round(Math.random() * 20);
        this.hit = crit + 10; // Урон = крит + 10
        return this.hit;
    }

    set gett(a) {
        this.health = a; // Установка здоровья
    }

    get get() {
        return this.health; // Получение текущего здоровья
    }
}

class Hero extends Characteristic {
    constructor(namee, weapon) {
        super(namee, weapon);
    }
}

class Villain extends Characteristic {
    constructor(namee, weapon) {
        super(namee, weapon);
    }
}

var hero = new Hero('Трат', 'меч');
var villain = new Villain('grand', 'кувалда');

console.log('Битва началась!');
console.log(`Здоровье героя: ${hero.get}`);
console.log(`Здоровье злодея: ${villain.get}`);

while(hero.get > 0 && villain.get > 0) {
    // Удар героя
    var heroHit = hero.hi();
    villain.gett = villain.get - heroHit; // Уменьшаем здоровье злодея
    console.log(`Удар нанес ${hero.namee}, урон: ${heroHit}. Здоровье злодея: ${villain.get}`);

    // Проверка состояния здоровья злодея
    if (villain.get <= 0) {
        console.log(`${villain.namee} повержен! ${hero.namee} победил!`);
        break; // Если злодей повержен, выходим из цикла
    }

    // Удар злодея
    var villainHit = villain.hi();
    hero.gett = hero.get - villainHit; // Уменьшаем здоровье героя
    console.log(`Удар нанес ${villain.namee}, урон: ${villainHit}. Здоровье героя: ${hero.get}`);

    // Проверка состояния здоровья героя
    if (hero.get <= 0) {
        console.log(`${hero.namee} повержен! ${villain.namee} победил!`);
        break; // Если герой повержен, выходим из цикла
    }
}

