'reach 0.1'

export const main = Reach.App(() => {
    const A = Participant('Alice', {
        //Alice interact interface here
        ready: Fun([], Null),
    })

    const B = API('Bob', {
     //Bobs interact interface here
    })
 init();
    A.only(() => {
        interact.ready()
    });
    A.publish();
    commit();
    exit();
})