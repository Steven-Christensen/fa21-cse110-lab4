const stats = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for(const property in stats)
{
    let name = `${property}`;
    let val = `${stats[property]}`;
    if(name[0] == 'r' || val % 2 != 0)
    {
        console.log(val);
    }
}