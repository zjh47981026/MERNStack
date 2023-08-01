//hotel/restaurant activity

//Arit, David, Lemar 

//Rest1 (resource blocking system)
//Arit - 5 mins (waiter) -> kitchen, wait for the order to get prepared
//David - 10 mins (waiter) -> Kitchen, wait for the order to get prepared
//Lemar - 15 mins (waiter) -> Kitchen, wait for the order to get prepared

//Total Time -> 5 + 10 + 15 -> 30 mins

//Rest2 (resource nonblocking system)
//Arit - 5 mins (waiter) -> kitchen, (get token - 1)
//David - 10 mins (waiter) -> Kitchen, (get token - 2)
//Lemar - 15 mins (waiter) -> Kitchen, (get token - 3) max time

//Total Time -> (5) + (10) + (15) -> 15 mins