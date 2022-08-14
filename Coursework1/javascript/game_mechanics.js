    class mafia {

      constructor(_picciottiNumber,
        _picciottiRank,
        _money,
        _territory,
        _name,
        _player,
        _eliminated,
        _CTA,
        _MafiaNo) {

        this.picciottiNumber = _picciottiNumber;
        this.picciottiRank = _picciottiRank;
        this.money = _money;
        this.territory = _territory;
        this.name = _name;
        this.player = _player;
        this.eliminated = _eliminated;
        this.CTA = _CTA;
        this.MafiaNo = _MafiaNo;

      }

      seeEliminated() {

        return this.eliminated;

      }

      seeMoney() {

        return Math.round(this.money);

      }

      seePicciotti() {

        return Math.round(this.picciottiNumber);

      }

      seeRank() {

        return Math.round(this.picciottiRank);

      }

      seeTerritory() {

        return (Math.round(this.territory * 10)) / 10;

      }

      picciottiPower() {

        return Math.round(this.picciottiNumber * this.picciottiRank);

      }

      seeName() {

        return this.name;

      }

      displayName() {

        console.log(this.name);

      }

      seeMafiaNo() {

        return this.MafiaNo;

      }

      seeSendingCrooks() {

        return this.CTA;

      }

      selectPlayer() {

        this.player = true;

      }

      deselectPlayer() {

        this.player = false;

      }

      seePlayer() {

        return this.player;

      }

      changeTerritory(int) {

        this.territory = this.territory + int;

      }

      eliminate() {

        this.picciottiNumber = 0;
        this.money = -1000000;
        this.territory = 0;
        this.eliminated = true;

      }

      addPicciotti(int) {

        this.picciottiNumber = this.picciottiNumber + int;

      }

      addRank(int) {

        this.picciottiRank = this.picciottiRank + int;

      }

      decreasePicciotti(int) {

        this.picciottiNumber = this.picciottiNumber - int;

      }

      sendNumOfCrooks(int) {

        this.CTA = int;
        this.decreasePicciotti(int);
        this.seeSendingCrooks();

      }

      changeMoney(n) {

        this.money = this.money + n;

      }


      picciottiExpenses() {

        this.money = this.money - ((this.picciottiNumber * 155) + (this.picciottiRank * 120));

      }


    }

    var Ndragheta = new mafia(19, 18, 100000, 4.5, "Ndragheta", false, false, 0, 1);
    var Corleone = new mafia(24, 14, 100000, 4.6, "Corleone", false, false, 0, 2);
    var RossoPomodoro = new mafia(21, 13, 100000, 5.7, "RossoPomodoro", false, false, 0, 3);
    var AvengersInfinite = new mafia(10, 34, 100000, 3.2, "AvengersInfinite", false, false, 0, 4);
    var GameStop = new mafia(40, 7, 100000, 2.8, "GameStop", false, false, 0, 5);


    var incrPicciottiYearValue = function() {

      return (((Math.random() * (2 - 1) + 1) * (Math.random() * (2 - 1) + 1)) + (Math.random() * (2 - 1) + 1)) * 0.175;

    };

    var incrPicciottiRankYearValue = function(f) {
      // seeTerritory
      return ((((((Math.random() * (2 - 1) + 1) * 0.1) * ((Math.random() * (2 - 1) + 1) * 0.1)) + (Math.random() * (2 - 1) + 1)) * 0.1) * (((Math.random() * (2 - 1) + 1) * 0.5) * f));

    };

    // var incrPicciottiYear = function(f1, f2, f3) {

      //addPicciotti(incrPicciottiYearValue() * seePicciotti());

    // };

    var incrPicciottiYear = function() {
      allMafiasArray.forEach(function(value, index) {

      value.addPicciotti(incrPicciottiYearValue() * value.seePicciotti());

     });
    };

    // var incrPicciottiRankYear = function() {

      //addRank(incrPicciottiRankYearValue() + seeRank());
    //   Ndragheta.addRank(incrPicciottiRankYearValue(Ndragheta.seeTerritory()) + Ndragheta.seeRank());
    //   Corleone.addRank(incrPicciottiRankYearValue(Corleone.seeTerritory()) + Corleone.seeRank());
    //   RossoPomodoro.addRank(incrPicciottiRankYearValue(RossoPomodoro.seeTerritory()) + RossoPomodoro.seeRank());
    //   AvengersInfinite.addRank(incrPicciottiRankYearValue(AvengersInfinite.seeTerritory()) + AvengersInfinite.seeRank());
    //   GameStop.addRank(incrPicciottiRankYearValue(GameStop.seeTerritory()) + GameStop.seeRank());
    // };

    var incrPicciottiRankYear = function() {
      allMafiasArray.forEach(function(value, index) {

      value.addRank(incrPicciottiRankYearValue(value.seeTerritory()) + value.seeRank());

     });
    };

    var moneyGain = function(f) {

      return (f * 70000) * ((Math.random() * (4 - 2) + 2) * 0.7);

    };

    // var incrMoneyYear = function() {
    //
    //   //this.money = this.money + moneyGain();
    //   //seeMoney();
    //   Ndragheta.money = Ndragheta.money + moneyGain(Ndragheta.seeTerritory());
    //   Corleone.money = Corleone.money + moneyGain(Corleone.seeTerritory());
    //   RossoPomodoro.money = RossoPomodoro.money + moneyGain(RossoPomodoro.seeTerritory());
    //   AvengersInfinite.money = AvengersInfinite.money + moneyGain(AvengersInfinite.seeTerritory());
    //   GameStop.money = GameStop.money + moneyGain(GameStop.seeTerritory());
    //
    // };

    var incrMoneyYear = function() {
      allMafiasArray.forEach(function(value, index) {

      value.money = value.money + moneyGain(value.seeTerritory());

     });
    };

    var picciottiExpensesYear = function() {
      allMafiasArray.forEach(function(value, index) {

      value.picciottiExpenses();

     });
    };

    var makeOneYearPass = function() {

      incrMoneyYear();
      picciottiExpensesYear();
      incrPicciottiRankYear();
      incrPicciottiYear();

      if (accessCompareGenericReturn(seeAllMoneyArrayReturn())[1] == 0) {

        console.log("There is no mafia left");

      }

      else {

        console.log("the richest mafia is " +
        accessCompareGenericReturn(seeAllMoneyArrayReturn())[1].seeName() +
        " with " +
        accessCompareGenericReturn(seeAllMoneyArrayReturn())[0] +
        " gold");

        console.log("the most powerful mafia is " +
        accessCompareGenericReturn(seeAllPicciottiPowerArrayReturn())[1].seeName() +
        " with " +
         accessCompareGenericReturn(seeAllPicciottiPowerArrayReturn())[0] +
         " total power");

      }
       callProgressCheck();
    };

    var allMafiasArray = [Ndragheta, Corleone, RossoPomodoro, AvengersInfinite, GameStop];

    // var seeAllRanks = function() {
    //
    //   console.log(Ndragheta.seeRank());
    //   console.log(Corleone.seeRank());
    //   console.log(RossoPomodoro.seeRank());
    //   console.log(AvengersInfinite.seeRank());
    //   console.log(GameStop.seeRank());
    //   var mafias = [r1, r2, r3, r4 , r5];
    //   var r1 = _r1;
    //   var r2 = _r2;
    //   var r3 = _r3;
    //   var r4 = _r4;
    //   var r5 = _r5;
    //
    //   return [r1, r2, r3, r4 , r5];
    // };
    //
    // var callSeeAllRanksArreyReturn = function () {
    //
    //   seeAllRanksArreyReturn(Ndragheta.seeRank(),
    //                         Corleone.seeRank(),
    //                         RossoPomodoro.seeRank(),
    //                         AvengersInfinite.seeRank(),
    //                         GameStop.seeRank());
    //
    //};

    var seeAllNames = function() {

      allMafiasArray.forEach(function(value, index) {

      console.log(value.seeName());

     });

    };

    var seeAllNamesArrayReturn = function() {

      var seeAllNamesArray = [];
      allMafiasArray.forEach(function(value, index) {

      seeAllNamesArray.push(value.seeName());

     });

     return seeAllNamesArray;
    };

    var seeAllNamesAvailable = function() {
      allMafiasArray.forEach(function(value, index) {
        if (value.seeEliminated() == false) {
          console.log(value.seeName());
        }
     });
    };

    var seeAllNamesArrayAvailableReturn = function() {

      var seeAllNamesArrayAvailable = [];
      allMafiasArray.forEach(function(value, index) {
        if (value.seeEliminated() == false) {
          seeAllNamesArrayAvailable.push(value.seeName());
        }
     });

     return seeAllNamesArrayAvailable;
    };

    var seeAllRanks = function() {
      allMafiasArray.forEach(function(value, index) {

      console.log(value.seeRank());

     });
    };

    var seeAllRanksArrayReturn = function() {

      var seeAllRanksArray = [];
      allMafiasArray.forEach(function(value, index) {

      seeAllRanksArray.push(value.seeRank());

     });

     return seeAllRanksArray;
    };

    var seeAllRanksAvailable = function() {
      allMafiasArray.forEach(function(value, index) {
        if (value.seeEliminated() == false) {
          console.log(value.seeRank());
        }
     });
    };

    var seeAllRanksArrayReturnReturn = function() {

      var seeAllRanksArrayAvailable = [];
      allMafiasArray.forEach(function(value, index) {
        if (value.seeEliminated() == false) {
          seeAllRanksArrayAvailable.push(value.seeRank());
        }
     });

     return seeAllRanksArrayAvailable;
    };

    // var mafias = seeAllRanksArreyReturn();
    // var ndrmon = mafias[0];
    // var cormon = mafias[1];
    //
    // var displayAllRanks = function() {
    //   var dAR = function (a) {
    //
    //   console.log(a[0]);
    // };
    // dAR(seeAllRanksArreyReturn);
    //
    // };


    // var seeAllPicciottiNumber = function() {
    //
    //   console.log(Ndragheta.seePicciotti());
    //   console.log(Corleone.seePicciotti());
    //   console.log(RossoPomodoro.seePicciotti());
    //   console.log(AvengersInfinite.seePicciotti());
    //   console.log(GameStop.seePicciotti());

      // return [p1, p2, p3, p4 , p5];
    //
    // };

    var seeAllPicciottiNumber = function() {
      allMafiasArray.forEach(function(value, index) {

      console.log(value.seePicciotti());

     });
    };

    var seeAllPicciottiNumberArrayReturn = function() {

     var seeAllPicciottiNumberArray = [];
     allMafiasArray.forEach(function(value, index) {

     seeAllPicciottiNumberArray.push(value.seePicciotti());

    });

    return seeAllPicciottiNumberArray;
    };

    var seeAllPicciottiNumberAvailable = function() {
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         console.log(value.seePicciotti());
       }
    });
    };

    var seeAllPicciottiNumberArrayReturnReturn = function() {

     var seeAllPicciottiNumberArrayAvailable = [];
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         seeAllPicciottiNumberArrayAvailable.push(value.seePicciotti());
       }
    });

    return seeAllPicciottiNumberArrayAvailable;
    };

    // var seeAllPicciottiPower = function() {
    //
    //   console.log(Ndragheta.picciottiPower());
    //   console.log(Corleone.picciottiPower());
    //   console.log(RossoPomodoro.picciottiPower());
    //   console.log(AvengersInfinite.picciottiPower());
    //   console.log(GameStop.picciottiPower());


      // return [pow1, pow2, pow3, pow4 , pow5];

    // };

    var seeAllPicciottiPower = function() {
      allMafiasArray.forEach(function(value, index) {

      console.log(value.picciottiPower());

     });
    };

    var seeAllPicciottiPowerArrayReturn = function() {

     var seeAllPicciottiPowerArray = [];
     allMafiasArray.forEach(function(value, index) {

     seeAllPicciottiPowerArray.push(value.picciottiPower());

    });

    return seeAllPicciottiPowerArray;
    };

    var seeAllPicciottiPowerAvailable = function() {
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         console.log(value.picciottiPower());
       }
    });
    };

    var seeAllPicciottiPowerArrayReturnReturn = function() {

     var seeAllPicciottiPowerArrayAvailable = [];
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         seeAllPicciottiPowerArrayAvailable.push(value.picciottiPower());
       }
    });

    return seeAllPicciottiPowerArrayAvailable;
    };

    // var seeAllMoney = function() {
    //
    //   console.log(Ndragheta.seeMoney());
    //   console.log(Corleone.seeMoney());
    //   console.log(RossoPomodoro.seeMoney());
    //   console.log(AvengersInfinite.seeMoney());
    //   console.log(GameStop.seeMoney());

      // return [m1, m2, m3, m4 , m5];

    // };

    var seeAllMoney = function() {
      allMafiasArray.forEach(function(value, index) {

      console.log(value.seeMoney());

     });
    };

    var seeAllMoneyArrayReturn = function() {

     var seeAllMoneyArray = [];
     allMafiasArray.forEach(function(value, index) {

     seeAllMoneyArray.push(value.seeMoney());

    });

    return seeAllMoneyArray;
    };

    var seeAllMoneyAvailable = function() {
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         console.log(value.seeMoney());
       }
    });
    };

    var seeAllMoneyArrayReturnReturn = function() {

     var seeAllMoneyArrayAvailable = [];
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         seeAllMoneyArrayAvailable.push(value.seeMoney());
       }
    });

    return seeAllMoneyArrayAvailable;
    };

    // var seeAllTerritory = function() {
    //
    //   console.log(Ndragheta.seeTerritory());
    //   console.log(Corleone.seeTerritory());
    //   console.log(RossoPomodoro.seeTerritory());
    //   console.log(AvengersInfinite.seeTerritory());
    //   console.log(GameStop.seeTerritory());
    //
    // };

    var seeAllTerritory = function() {
      allMafiasArray.forEach(function(value, index) {

      console.log(value.seeTerritory());

     });
    };

    var seeAllTerritoryArrayReturn = function() {

     var seeAllTerritoryArray = [];
     allMafiasArray.forEach(function(value, index) {

     seeAllTerritoryArray.push(value.seeTerritory());

    });

    return seeAllTerritoryArray;
    };

    var seeAllTerritoryAvailable = function() {
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         console.log(value.seeTerritory());
       }
    });
    };

    var seeAllTerritoryArrayReturnReturn = function() {

     var seeAllTerritoryArrayAvailable = [];
     allMafiasArray.forEach(function(value, index) {
       if (value.seeEliminated() == false) {
         seeAllTerritoryArrayAvailable.push(value.seeTerritory());
       }
    });

    return seeAllTerritoryArrayAvailable;
    };

    var seeAll = function() {

        console.log("Number of picciotti");
        seeAllPicciottiNumber();
        console.log("Ranks of the picciotti");
        seeAllRanks();
        console.log("Power of the picciotti");
        seeAllPicciottiPower();
        console.log("all money owned by the mafias");
        seeAllMoney();
        console.log("all territory owned by the mafias");
        seeAllTerritory();

    };

    var seeAllAvailable = function() {

        console.log("Number of picciotti of remaining mafias:");
        seeAllPicciottiNumberAvailable();
        console.log("Ranks of the picciotti of remaining mafias:");
        seeAllRanksAvailable();
        console.log("Power of the picciotti of remaining mafias:");
        seeAllPicciottiPowerAvailable();
        console.log("all money owned by the remaining mafias:");
        seeAllMoneyAvailable();
        console.log("all territory owned by the remaining mafiaskey: 'value'");
        seeAllTerritoryAvailable();

    };


    var compareGeneric = function(array) {

      var highest = 0;
      var mafiaReturn = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] >= highest) {

          highest = array[i];
          mafiaReturn = allMafiasArray[i];


        }
      }
      var highestAndMafiaReturn = [];
      highestAndMafiaReturn.push(highest);
      highestAndMafiaReturn.push(mafiaReturn);
      return highestAndMafiaReturn;


    };

    var accessCompareGenericReturn = function(array) {

      return compareGeneric(array);

    };

    var checkMafiaNo = function (n , mafiaArray) {

      var resultCheckMafiaNo = "there is no mafia associated with this Number";
      for (var i = 0; i < mafiaArray.length; i++) {
        if (mafiaArray[i].seeMafiaNo() == n) {
          resultCheckMafiaNo = mafiaArray[i];
          i = mafiaArray.length;
        }
      }

      return resultCheckMafiaNo;

    };

    var checkPlayer = function (mafiaArray) {

      var resultCheckPlayer = "there are no players currently";
      for (var i = 0; i < mafiaArray.length; i++) {
        if (mafiaArray[i].seePlayer()) {
          resultCheckPlayer = mafiaArray[i];
          i = mafiaArray.length;
        }
      }

      return resultCheckPlayer;

    };

    var callCheckPlayer = function() {

        return checkPlayer(allMafiasArray);

    };

    var namePlayer = function() {

      return callCheckPlayer().seeName();

    };

    var picciottiPlayer = function() {

      return callCheckPlayer().seePicciotti();

    };

    var rankPlayer = function() {

      return callCheckPlayer().seeRank();

    };

    var territoryPlayer = function() {

      return callCheckPlayer().seeTerritory();

    };

    var moneyPlayer = function() {

      return callCheckPlayer().seeMoney();

    };

    var powerPlayer = function() {

      return callCheckPlayer().picciottiPower();

    };

    var expensesPlayer = function() {

      return (callCheckPlayer().seePicciotti() * 155) + (callCheckPlayer().seeRank() * 120);

    };

    var minNetGainPlayer = function() {

      return (((callCheckPlayer().seeTerritory() * 70000) * (2 * 0.7)) -
      ((155 * callCheckPlayer().seePicciotti()) + (120 * (callCheckPlayer().seeRank()))));

    };

    var maxNetGainPlayer = function() {

      return (((callCheckPlayer().seeTerritory() * 70000) * (4 * 0.7)) -
      ((155 * callCheckPlayer().seePicciotti()) + (120 * (callCheckPlayer().seeRank()))));

    };

    var seeAllPlayer = function() {

      console.log(namePlayer());
      console.log(picciottiPlayer());
      console.log(rankPlayer());
      console.log(territoryPlayer());
      console.log(moneyPlayer());
      console.log(powerPlayer());
      console.log(expensesPlayer());
      console.log(minNetGainPlayer());
      console.log(maxNetGainPlayer());

    };

    var attackPhase = function (attackerMafiaNo, defenderMafiaNo, num) {

      var result = 0;

      if (attackerMafiaNo < 0 &&
          attackerMafiaNo > 5 &&
          defenderMafiaNo < 0 &&
          defenderMafiaNo > 5) {
        console.log("there is no such mafia associated with one or more inserted key numbers ");
      }

      else if (attackerMafiaNo == defenderMafiaNo ||
          defenderMafiaNo == 0) {

        console.log("not attacking this year");

      }

      else if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeEliminated() == true ) {

        console.log("defender mafia eliminated, unable to attack");

      }

      else if (num > checkMafiaNo(attackerMafiaNo, allMafiasArray).seePicciotti()) {

        console.log("not enough units owned");

      }

      else if ((checkMafiaNo(defenderMafiaNo, allMafiasArray).picciottiPower() * 2) >= (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank() * num) &&
          (((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) / (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank())) >=
          (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti()))) {

                if ((Math.round(Math.random() * (2 - 1) + 1)) == 1) {

                  checkMafiaNo(attackerMafiaNo, allMafiasArray).sendNumOfCrooks(num);
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).addPicciotti(num / 2);
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).addPicciotti(-(checkMafiaNo(attackerMafiaNo, allMafiasArray).seePicciotti()));
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).changeTerritory(checkMafiaNo(defenderMafiaNo, allMafiasArray).seeTerritory() +
                                                                                               ((Math.random() * (3 - 1) + 1) * 0.012) * num);
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).changeMoney(checkMafiaNo(defenderMafiaNo, allMafiasArray).seeMoney() / 2);
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).changeMoney(- (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeMoney() * 2));
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).addRank((((Math.random() * (8 - 5) + 5) * 0.04) * num) *
                                                      (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * 0.12));
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).eliminate();
                  console.log(
                    "KILL! The attacking mafia " +
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).seeName() +
                   "has defeated the defending mafia " +
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).seeName()
                 );

                 if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePlayer() == true) {

                   console.log("GAME OVER");

                 }
                }
                else {

                  checkMafiaNo(attackerMafiaNo, allMafiasArray).sendNumOfCrooks(num);
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).sendNumOfCrooks(checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti()- 1);
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).addPicciotti(num / 2);
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).changeTerritory(((Math.random() * (2 - 1) + 1) * 0.012) * num);
                  checkMafiaNo(attackerMafiaNo, allMafiasArray).addRank((((Math.random() * (2 - 1) + 1) * 0.04) * num) *
                                                                        (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * 0.12));
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).addPicciotti(((Math.random() * (7 - 5) + 5) * 0.1) *
                                                  ((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                          checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank()));
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).changeTerritory((((Math.random() * (2 - 1) + 1) * 0.012) * num) +
                                                                                (((Math.random() * (2 - 1) + 1) * 0.012) * num));
                  checkMafiaNo(defenderMafiaNo, allMafiasArray).addRank((((Math.random() * (6 - 4) + 4) * 0.04) * num) *
                                                      (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank() * 0.12));
                  result = 2;

                  if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePlayer() == true) {

                    console.log("ESCAPED DEATH! you barely escaped death");
                    console.log(checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti() + " crooks left");

                  }

                  else {

                    console.log(checkMafiaNo(defenderMafiaNo, allMafiasArray).seeName() + " managed to survive from the attack");

                  }
                }
      }

      else if ((checkMafiaNo(defenderMafiaNo, allMafiasArray).picciottiPower() * 2) <
               (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num)) {

            checkMafiaNo(attackerMafiaNo, allMafiasArray).sendNumOfCrooks(num);
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addPicciotti(num / 2);
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addPicciotti(- (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti()));
            checkMafiaNo(attackerMafiaNo, allMafiasArray).changeTerritory(checkMafiaNo(defenderMafiaNo, allMafiasArray).seeTerritory() +
                                                                                       (((Math.random() * (3 - 1) + 1) * 0.012) * num));
            checkMafiaNo(attackerMafiaNo, allMafiasArray).changeMoney(checkMafiaNo(defenderMafiaNo, allMafiasArray).seeMoney() / 2);
            checkMafiaNo(defenderMafiaNo, allMafiasArray).changeMoney(-(checkMafiaNo(defenderMafiaNo, allMafiasArray).seeMoney() * 2));
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addRank((((Math.random() * (8 - 5) + 5) * 0.04) * num) *
                                                (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * 0.12));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).eliminate();
            console.log("KILL! The attacking mafia " + checkMafiaNo(attackerMafiaNo, allMafiasArray).seeName() + " has defeated " + checkMafiaNo(defenderMafiaNo, allMafiasArray).seeName());

            if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePlayer() == true) {

              console.log("GAME OVER");

            }
      }

      else if ((Math.round(Math.random() * (3 - 1) + 1)) == 1) {

            checkMafiaNo(attackerMafiaNo, allMafiasArray).sendNumOfCrooks(num);
            checkMafiaNo(defenderMafiaNo, allMafiasArray).sendNumOfCrooks((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                                                  checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank());
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addPicciotti(((Math.random() * (7 - 4) + 4) * 0.1) * num);
            checkMafiaNo(attackerMafiaNo, allMafiasArray).changeTerritory((((Math.random() * (3 - 1) + 1) * 0.012) * num) +
                                                                          (((Math.random() * (2 - 1) + 1) * 0.012) * num));
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addRank((((Math.random() * (5 - 4) + 2) * 0.04) * num) *
                                                (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * 0.12));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addPicciotti(((Math.random() * (4 - 1) + 1) * 0.1) *
                                            ((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                    checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank()));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).changeTerritory(-(((Math.random() * (3 - 1) + 1) * 0.012) * num));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addRank((((Math.random() * (5 - 2) + 2) * 0.04) * num) *
                                                (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank() * 0.12));
            result = 1;

            if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePlayer() == true) {

              console.log("FAILED DEFENCE! You've lost the battle, remaining crooks: " + checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti());

            }

            else {

              console.log("ATTACKING MAFIA WINS! The attacking mafia wins the battle");

            }
      }

      else if ((Math.round(Math.random() * (2 - 1) + 1)) == 1) {

            checkMafiaNo(attackerMafiaNo, allMafiasArray).sendNumOfCrooks(num);
            checkMafiaNo(defenderMafiaNo, allMafiasArray).sendNumOfCrooks((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                                                  checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank());
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addPicciotti(((Math.random() * (6 - 1) + 1) * 0.1) * num);
            checkMafiaNo(attackerMafiaNo, allMafiasArray).changeTerritory(-(((Math.random() * (3 - 1) + 1) * 0.012) * num));
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addRank((((Math.random() * (5 - 3) + 3) * 0.04) * num) *
                                                (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * 0.12));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addPicciotti(((Math.random() * (5 - 4) + 1) * 0.1) *
                                            ((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                    checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank()));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).changeTerritory((((Math.random() * (3 - 1) + 1) * 0.012) * num) +
                                                                          (((Math.random() * (2 - 1) + 1) * 0.012) * num));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addRank((((Math.random() * (5 - 2) + 2) * 0.04) * num) *
                                                (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank() * 0.12));
            result = 2;

            if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePlayer() == true) {

              console.log("WON DEFENCE! You've been attacked but you won the battle, remaining crooks: " + checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti());

            }

            else {

              console.log("DEFENDING MAFA WINS! The attacking mafia lost the battle");

            }
      }

      else {

            checkMafiaNo(attackerMafiaNo, allMafiasArray).sendNumOfCrooks(num);
            checkMafiaNo(defenderMafiaNo, allMafiasArray).sendNumOfCrooks((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                                                  checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank());
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addPicciotti(0.5 * num);
            checkMafiaNo(attackerMafiaNo, allMafiasArray).changeTerritory(((Math.random() * (2 - 1) + 1) * 0.012) * num);
            checkMafiaNo(attackerMafiaNo, allMafiasArray).addRank((((Math.random() * (5 - 4) + 4) * 0.04) * num) *
                                                (checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * 0.12));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addPicciotti(0.5 *
                                            ((checkMafiaNo(attackerMafiaNo, allMafiasArray).seeRank() * num) /
                                                    checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank()));
            checkMafiaNo(defenderMafiaNo, allMafiasArray).changeTerritory(((Math.random() * (2 - 1) + 1) * 0.012) * num);
            checkMafiaNo(defenderMafiaNo, allMafiasArray).addRank((((Math.random() * (5 - 4) + 4) * 0.04) * num) *
                                                (checkMafiaNo(defenderMafiaNo, allMafiasArray).seeRank() * 0.12));
            result = 3;

            if (checkMafiaNo(defenderMafiaNo, allMafiasArray).seePlayer() == true) {

              console.log("DRAW! You've been attacked but the result is a draw, remaining crooks: " + checkMafiaNo(defenderMafiaNo, allMafiasArray).seePicciotti());

            }

            else {

              console.log("EVEN! Neither of the two mafias won the battle");

            }
      }
    };

    var oneYearPasses = function (plyrId) {

      if (typeof callCheckPlayer() == "string" || callCheckPlayer().seeEliminated() == true) {

        console.log("Unable to proceed, there are no players");

      }

      else if (accessCompareGenericReturn(seeAllMoneyArrayReturn()) == 0) {

        console.log("Unable to proceed, probably all players are eliminated");

      }

      else {

        incrPicciottiYear();
        incrPicciottiRankYear();
        incrMoneyYear();
        console.log("The current situation is:");
        console.log("Remaining mafias: ");
        seeAllNamesAvailable();
        console.log("Your number of crooks: " + callCheckPlayer().seePicciotti());
        console.log("The rank of your crooks is: " + callCheckPlayer().seeRank());
        console.log("Your current cash: " + callCheckPlayer().seeMoney() + "$");
        console.log("Your total power is: " + callCheckPlayer().picciottiPower());
        console.log("Your territory: " + callCheckPlayer().seeTerritory());
        console.log("The most powerful mafia this year is: " + accessCompareGenericReturn(seeAllMoneyArrayReturn())[1].seeName());
        console.log("The wealthiest mafia this year is: " + accessCompareGenericReturn(seeAllPicciottiPowerArrayReturn())[1].seeName());
        callProgressCheck();
        honoreGift();
        playerScore = (playerScore + (Math.round((callCheckPlayer().seePicciotti() +
                                                       callCheckPlayer().seeRank() +
                                                     callCheckPlayer().seeMoney()) /
                                                                           1000))) *
                                                         getPlayerInfo().difficulty;

      }
    };

    var eliminatedCount = function() {

      var eliminatedCountReturn = 0;
      for (var i = 0; i < allMafiasArray.length; i++) {
        if (allMafiasArray[i].seeEliminated() == true) {

          eliminatedCountReturn = eliminatedCountReturn + 1;

        }
      }

      return eliminatedCountReturn;

    };

    // var callEliminatedCount = function() {
    //
    //   eliminatedCount(allMafiasArray);
    //
    // };
    var playerScore = 0;

    var updateScore = function(){

      if (accessOriginalPlayerInfo().score < playerScore) {

        var loggedIn = {
            username0: getPlayerInfo().username0,
            password0: getPlayerInfo().password0,
            score: playerScore,
            mafia: getPlayerInfo().mafia,
            gift: getPlayerInfo().gift,
            difficulty: getPlayerInfo().difficulty
        };
        var loggedInString = JSON.stringify(loggedIn);

        localStorage.setItem("loggedUser", loggedInString);

        var oUser = {
            username: accessOriginalPlayerInfo().username,
            password: accessOriginalPlayerInfo().password,
            score: playerScore,
            mafia: accessOriginalPlayerInfo().mafia,
            gift: accessOriginalPlayerInfo().gift,
            difficulty: accessOriginalPlayerInfo().difficulty
        };
        var oUserString = JSON.stringify(loggedIn);

        localStorage.setItem(accessOriginalPlayerInfo(), oUserString);

      }

    };

    var progressCheck = function(mafiaArray, elimnCount) {

      for (var i = 0; i < mafiaArray.length; i++) {
        if (mafiaArray[i].seePicciotti() <= 0 || mafiaArray[i].seeMoney() <= 0) {

          if (eliminatedCount() == 4) {

            mafiaArray[i].eliminate();
            console.log(mafiaArray[i].seeName() + " has been eliminated because all of its crooks are mad");
            console.log("Well, everyone is dead");
            console.log("Game Over");
            updateScore();
            leaderboardPopulate(accessOriginalPlayerInfo().playerScore , accessOriginalPlayerInfo().username);

          }

          else if (eliminatedCount() == 3) {

            if (mafiaArray[i].seePlayer() == true) {

              mafiaArray[i].eliminate();
              console.log("YOU'VE LOST");
              console.log("GAME OVER");
              updateScore();
              leaderboardPopulate(accessOriginalPlayerInfo().playerScore , accessOriginalPlayerInfo().username);

            }

            else {

              mafiaArray[i].eliminate();
              console.log(mafiaArray[i].seeName() + " has been eliminated because all of its crooks are mad");

              if (accessCompareGenericReturn(seeAllMoneyArrayReturn())[1] == 0) {

                console.log("Nobody won this game");
                console.log("since apparently everyone else is dead");
                console.log("GAME OVER");
                updateScore();
                leaderboardPopulate(accessOriginalPlayerInfo().playerScore , accessOriginalPlayerInfo().username);

              }

              else {

                console.log(accessCompareGenericReturn(seeAllMoneyArrayReturn())[1].seeName() + " won this game");
                console.log("since apparently everyone else is dead");
                updateScore();
                leaderboardPopulate(accessOriginalPlayerInfo().playerScore , accessOriginalPlayerInfo().username);

              }
            }
          }

          else {

            mafiaArray[i].eliminate();
            console.log(mafiaArray[i].seeName() + " has been eliminated because all of its crooks are mad");

          }

        }
      }

    };

    var callProgressCheck = function() {

      progressCheck(allMafiasArray, eliminatedCount());

    };

    var chooseMafia = function(mafiamno) {

      if (typeof checkPlayer(allMafiasArray) != "string") {

        console.log("it looks like this function has already been used and you've already chosen a mafia");
        console.log("please use the 'deselectAllPlayer function' first, and then re-try");

      }

      else {

        checkMafiaNo(mafiamno, allMafiasArray).selectPlayer();
        console.log("You have chosen : " + checkMafiaNo(mafiamno, allMafiasArray).seeName());

      }
    };

    var deselectAllPlayer = function() {

      allMafiasArray.forEach(function(value, index) {

      value.deselectPlayer();

     });

    };

    var startGame = function (attackingMafiamno, target, numOfCrooks) {

      if (target > 5 || target < 0 ||
        attackingMafiamno > 5 || attackingMafiamno < 0) {

        console.log("There's no such mafia associated with this target number");

      }

      else if (checkMafiaNo(target, allMafiasArray).seeEliminated() == true) {

        console.log("Selected target has been taken out, unable to select it");

      }

      else if (numOfCrooks >= checkMafiaNo(attackingMafiamno, allMafiasArray).seePicciotti()) {

        console.log("not enough crooks owned to carry out the action");

      }

      else {

        if (target == 0) {

          console.log("The player has decided to not attack anyone this year");

        }

        else if (checkMafiaNo(attackingMafiamno, allMafiasArray).seeEliminated() == true) {

          console.log("The player has been eliminated, unable to carry out the action");

        }

        else {

          if (checkMafiaNo(attackingMafiamno, allMafiasArray).seeMafiaNo() != target) {

            var crooksPriorToAttack = checkMafiaNo(attackingMafiamno, allMafiasArray).seePicciotti();
            console.log("Player's mafia " + checkMafiaNo(attackingMafiamno, allMafiasArray).seeName() +
            " decided to attack " + checkMafiaNo(target, allMafiasArray).seeName() +
            " with " + numOfCrooks + " crooks");
            attackPhase(attackingMafiamno, target, numOfCrooks);
            console.log(checkMafiaNo(attackingMafiamno, allMafiasArray).seePicciotti() -
                                          (crooksPriorToAttack - numOfCrooks) +
                                          " crooks have returned alive from the attack");
            console.log("total crooks remaining now: " + checkMafiaNo(attackingMafiamno, allMafiasArray).seePicciotti());
            startAttack();
            oneYearPasses();

          }

          else {

            attackPhase(attackingMafiamno, target, numOfCrooks);
            startAttack();
            oneYearPasses();

          }
        }
      }
    };

    var callStartGame = function (target, numOfCrooks) {

      if (typeof callCheckPlayer() == "string") {

        console.log("The player has to select a mafia in order to start the game");

      }
      else {

        startGame(callCheckPlayer().seeMafiaNo(), target , numOfCrooks);

      }
    };

    var randomTarget = function() {

      var rand = Math.random() * (5 - 1) + 1 ;
      var randArray = [0];
      randArray.shift();
      randArray.push(rand);
      return randArray;

    };

    var startAttack = function() {

      var def = 0;

      for (var i = 0; i < allMafiasArray.length; i++) {

        if (getPlayerInfo().difficulty == 2 && (Math.round(Math.random() * (3 - 1) + 1)) == 1) {

          def = callCheckPlayer().seeMafiaNo();

        }

        else {

          def = Math.round(randomTarget()[0]);

        }

        if (allMafiasArray[i].seeEliminated() != true || allMafiasArray[i].seePlayer() != true) {

          if (checkMafiaNo(def, allMafiasArray).seeEliminated() == true) {

            i = i - 1;

          }

          else {

            if (allMafiasArray[i].seePicciotti() < 6 || allMafiasArray[i].seeMafiaNo() == def) {

              console.log(allMafiasArray[i].seeName() + " has decided not to attack anyone this year");

            }

            else {

              if (allMafiasArray[i].seePlayer() != true) {

                var attackingCrooks = Math.round(allMafiasArray[i].seePicciotti() / ((Math.random() * (24 - 14) + 14) / 10 ));
                console.log(allMafiasArray[i].seeName() + " is attacking " + checkMafiaNo(def, allMafiasArray).seeName() +
                                                                                 " with " + attackingCrooks + " crooks!");
                attackPhase(allMafiasArray[i].seeMafiaNo(), def, attackingCrooks);

              }
            }
          }
        }
      }
    };
    var getPlayerInfo = function(){

      var presentUserString = localStorage.getItem("loggedUser");
      var presentUser = JSON.parse(presentUserString);
      return presentUser;
    };

    var accessOriginalPlayerInfo = function(){

      var originalUserSring = localStorage.getItem(getPlayerInfo().username0);
      var originalUser = JSON.parse(originalUserSring);
      return originalUser;

    };

    chooseMafia(getPlayerInfo().mafia);

    var sangueGift = function() {

      if (getPlayerInfo().gift == 3) {

        callCheckPlayer().addRank(2);

      }
    };

    var honoreGift = function() {

      if (getPlayerInfo().gift == 2) {

        callCheckPlayer().addPicciotti(1);

      }
    };

    var judgeGift = function() {

      if (getPlayerInfo().gift == 1) {

        callCheckPlayer().changeMoney(100000);

      }
    };

    sangueGift();

    judgeGift();

    window.onload = function() {


  document.getElementById('Hname').innerHTML = callCheckPlayer().seeName();
  document.getElementById('Hnum').innerHTML = callCheckPlayer().seePicciotti();
  document.getElementById('Hrank').innerHTML = callCheckPlayer().seeRank();
  document.getElementById('Hcash').innerHTML = callCheckPlayer().seeMoney();
  document.getElementById('Hter').innerHTML = callCheckPlayer().seeTerritory();

  document.getElementById('maf1').innerHTML = checkMafiaNo(1, allMafiasArray).seeName();
  document.getElementById('maf2').innerHTML = checkMafiaNo(2, allMafiasArray).seeName();
  document.getElementById('maf3').innerHTML = checkMafiaNo(3, allMafiasArray).seeName();
  document.getElementById('maf4').innerHTML = checkMafiaNo(4, allMafiasArray).seeName();
  document.getElementById('maf5').innerHTML = checkMafiaNo(5, allMafiasArray).seeName();
  document.getElementById('richest').innerHTML = "Richest mafia: " + accessCompareGenericReturn(seeAllMoneyArrayReturn())[1].seeName();
  document.getElementById('powerful').innerHTML = "Most powerful: " + accessCompareGenericReturn(seeAllPicciottiPowerArrayReturn())[1].seeName();

};

  var target = 0;

  var buttonMafia1 = function() {

      target = 1;

  };

  var buttonMafia2 = function() {

      target = 2;

  };

  var buttonMafia3 = function() {

      target = 3;

  };

  var buttonMafia4 = function() {

      target = 4;

  };

  var buttonMafia5 = function() {

      target = 5;

  };

  var attackingCrooksHTML = 0;

  var startThisShoot = function(){

    if (document.getElementById('picciotti').value > callCheckPlayer().seePicciotti()) {

    return false;

  }

  else {

    attackingCrooksHTML = document.getElementById('picciotti').value;
    callStartGame(target,attackingCrooksHTML);
    refresh();
    return true;

  }

};

  function refresh() {
    document.getElementById('Hname').innerHTML = callCheckPlayer().seeName();
    document.getElementById('Hnum').innerHTML = callCheckPlayer().seePicciotti();
    document.getElementById('Hrank').innerHTML = callCheckPlayer().seeRank();
    document.getElementById('Hcash').innerHTML = callCheckPlayer().seeMoney();
    document.getElementById('Hter').innerHTML = callCheckPlayer().seeTerritory();

    document.getElementById('maf1').innerHTML = checkMafiaNo(1, allMafiasArray).seeName();
    document.getElementById('maf2').innerHTML = checkMafiaNo(2, allMafiasArray).seeName();
    document.getElementById('maf3').innerHTML = checkMafiaNo(3, allMafiasArray).seeName();
    document.getElementById('maf4').innerHTML = checkMafiaNo(4, allMafiasArray).seeName();
    document.getElementById('maf5').innerHTML = checkMafiaNo(5, allMafiasArray).seeName();
    document.getElementById('richest').innerHTML = "Richest mafia: " + accessCompareGenericReturn(seeAllMoneyArrayReturn())[1].seeName();
    document.getElementById('powerful').innerHTML = "Most powerful: " + accessCompareGenericReturn(seeAllPicciottiPowerArrayReturn())[1].seeName();

  }

  var leaderboardScoreArray= [0,0,0,0,0];
  var leaderboardNamesArray= [0,0,0,0,0];

  var leaderboardPopulate = function(num, name){
    leaderboardScoreArray.forEach(function(value, index) {

    if (num > value) {

      leaderboardScoreArray.splice(index, 4, num);
      leaderboardNamesArray.splice(index, 4, name);

    }

   });


  };

    // window.onload = function() {
    //
    //     document.getElementById('name1').innerHTML = leaderboardNamesArray[0];
    //     document.getElementById('score1').innerHTML = leaderboardNamesArray[0];
    //     document.getElementById('name2').innerHTML = leaderboardNamesArray[1];
    //     document.getElementById('score2').innerHTML = leaderboardNamesArray[1];
    //     document.getElementById('name3').innerHTML = leaderboardNamesArray[2];
    //     document.getElementById('score3').innerHTML = leaderboardNamesArray[2];
    //     document.getElementById('name4').innerHTML = leaderboardNamesArray[3];
    //     document.getElementById('score4').innerHTML = leaderboardNamesArray[3];
    //     document.getElementById('name5').innerHTML = leaderboardNamesArray[4];
    //     document.getElementById('score5').innerHTML = leaderboardNamesArray[4];
    //
    // };
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);
    // callStartGame(1,1);

    // NPCmafiasarray = [];
    //
    // var NPCmafias = function() {
    //
    //
    //   allMafiasArray.forEach(function(value, index){
    //
    //     if (value.seePlayer == false) {
    //
    //       NPCmafiasarray.push(value.seeName());
    //
    //     }
    //
    //   });
    //
    //   return NPCmafiasarray;
    //
    // };
    //
    //
    // test
    //
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    // makeOneYearPass();
    //
    //
      // seeAll();
      // console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      // makeOneYearPass();
      //   seeAll();
      //   console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //   makeOneYearPass();
      //     seeAll();
      //     console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //     makeOneYearPass();
      //       seeAll();
      //       console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //       makeOneYearPass();
      //         seeAll();
      //         console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //         makeOneYearPass();
      //           seeAll();
      //           console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //           makeOneYearPass();
      //             seeAll();
      //             console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //             makeOneYearPass();
      //               seeAll();
      //               console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //               makeOneYearPass();
      //                 seeAll();
      //                 console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
      //                 makeOneYearPass();
      //                   seeAll();
      //                   console.log("NUM OF ELIMINATED MAFIAS: " + eliminatedCount());
    //
    // console.log(accessCompareGenericReturn(seeAllMoneyArrayReturn())[0]);
    // console.log(accessCompareGenericReturn(seeAllMoneyArrayReturn())[1]);
    // makeOneYearPass();
    //
    //
    // seeAllPicciottiNumber();
    //
    // Ndragheta.displayName();
    //
    // console.log(Ndragheta.seeMoney());
    // console.log(Ndragheta.seePicciotti());
    // Ndragheta.addPicciotti(2);
    // console.log(Ndragheta.seePicciotti());
    // console.log(incrPicciottiRankYearValue(Ndragheta.seeTerritory()));
    // incrPicciottiRankYear();
    // console.log(Ndragheta.seeRank());
    // incrMoneyYear();
    // console.log(Ndragheta.seeMoney());
    //
    // seeAll();
    // deselectAllPlayer();
    // chooseMafia(1);
    // console.log(checkMafiaNo(1, allMafiasArray).seeEliminated());
    // startAttack();
     //callStartGame(2, 10);
    // callStartGame(2, 5);
    // callStartGame(2, 5);
    // callStartGame(2, 10);
    // callStartGame(2, 5);
    // callStartGame(2, 5);
    // callStartGame(2, 100);
    // callStartGame(2, 100);
    // callStartGame(2, 100);
    // callStartGame(2, 100);
