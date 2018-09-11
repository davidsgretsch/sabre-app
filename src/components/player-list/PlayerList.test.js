import React from 'react';
import { shallow } from 'enzyme';
import PlayerList from './PlayerList';

describe('PlayerList', () => {
  let wrapper;
  const players = [
    { name: 'Sergio Romero', position: 'Keeper', nationality: 'Belgium', age: 31 },
    { name: 'Paul Pogba', position: 'Central Midfield', nationality: 'France', age: 25 }
  ];

  beforeEach(() => {
    wrapper = shallow(<PlayerList players={players} />);
  });

  describe('render component', () => {
    let table;

    beforeEach(() => {
      table = wrapper.find('table');
    });

    it('should render a table component', () => {
      expect(table).toHaveLength(1);
    });

    it('should have class "table is-hoverable is-fullwidth is-narrow"', () => {
      expect(table.prop('className')).toEqual('table is-hoverable is-fullwidth is-narrow');
    });

    describe('thead', () => {
      let thead;
      beforeEach(() => {
        thead = table.find('thead');
      });

      it('should render a thead', () => {
        expect(thead).toHaveLength(1);
      });

      describe('tr', () => {
        let tr;

        beforeEach(() => {
          tr = thead.find('tr');
        });
  
        it('should render a tr', () => {
          expect(tr).toHaveLength(1);
        });

        it('should have class "is-selected"', () => {
          expect(tr.prop('className')).toEqual('is-selected');
        });
        
        describe('headers', () => {
          let ths;

          beforeEach(() => {
            ths = thead.find('th');
          });
    
          it('should render four th', () => {
            expect(ths).toHaveLength(4);
          });

          describe('first th', () => {
            let th1;

            beforeEach(() => {
              th1 = ths.at(0);
            });
      
            it('should render header "Player"', () => {
              expect(th1.text()).toEqual('Player');
            });
          });

          describe('second th', () => {
            let th2;

            beforeEach(() => {
              th2 = ths.at(1);
            });
      
            it('should render header "Position"', () => {
              expect(th2.text()).toEqual('Position');
            });
          });

          describe('third th', () => {
            let th3;

            beforeEach(() => {
              th3 = ths.at(2);
            });
      
            it('should render header "Team"', () => {
              expect(th3.text()).toEqual('Team');
            });
          });

          describe('fourth th', () => {
            let th4;

            beforeEach(() => {
              th4 = ths.at(3);
            });
      
            it('should render header "Age"', () => {
              expect(th4.text()).toEqual('Age');
            });
          });
        });
      });
    });

    describe('tbody', () => {
      let tbody;

      beforeEach(() => {
        tbody = table.find('tbody');
      });

      it('should render a tbody', () => {
        expect(tbody).toHaveLength(1);
      });

      describe('tr', () => {
        let tr;

        beforeEach(() => {
          tr = tbody.find('tr');
        });
  
        it('should render two tr', () => {
          expect(tr).toHaveLength(2);
        });

        describe('first tr', () => {
          let tr1;

          beforeEach(() => {
            tr1 = tr.at(0);
          });
    
          it('should have first player name as key', () => {
            expect(tr1.key()).toEqual('Sergio Romero');
          });

          describe('cells', () => {
            let tds;

            beforeEach(() => {
              tds = tr1.find('td');
            });
      
            it('should render four td', () => {
              expect(tds).toHaveLength(4);
            });
  
            describe('first td', () => {
              let td1;

              beforeEach(() => {
                td1 = tds.at(0);
              });
        
              it('should render player name "Sergio Romero"', () => {
                expect(td1.text()).toEqual('Sergio Romero');
              });
            });
  
            describe('second th', () => {
              let td2;

              beforeEach(() => {
                td2 = tds.at(1);
              });
        
              it('should render player position "Keeper"', () => {
                expect(td2.text()).toEqual('Keeper');
              });
            });
  
            describe('third th', () => {
              let td3;

              beforeEach(() => {
                td3 = tds.at(2);
              });
        
              it('should render player position "Belgium"', () => {
                expect(td3.text()).toEqual('Belgium');
              });
            });
  
            describe('fourth th', () => {
              let td4;

              beforeEach(() => {
                td4 = tds.at(3);
              });
        
              it('should render player age "31"', () => {
                expect(td4.text()).toEqual('31');
              });
            });
          });
        });

        describe('second tr', () => {
          let tr2;

          beforeEach(() => {
            tr2 = tr.at(1);
          });
    
          it('should have second player name as key', () => {
            expect(tr2.key()).toEqual('Paul Pogba');
          });

          describe('cells', () => {
            let tds;

            beforeEach(() => {
              tds = tr2.find('td');
            });
      
            it('should render four td', () => {
              expect(tds).toHaveLength(4);
            });
  
            describe('first td', () => {
              let td1;

              beforeEach(() => {
                td1 = tds.at(0);
              });
        
              it('should render player name "Paul Pogba"', () => {
                expect(td1.text()).toEqual('Paul Pogba');
              });
            });
  
            describe('second th', () => {
              let td2;

              beforeEach(() => {
                td2 = tds.at(1);
              });
        
              it('should render player position "Central Midfield"', () => {
                expect(td2.text()).toEqual('Central Midfield');
              });
            });
  
            describe('third th', () => {
              let td3;

              beforeEach(() => {
                td3 = tds.at(2);
              });
        
              it('should render player position "France"', () => {
                expect(td3.text()).toEqual('France');
              });
            });
  
            describe('fourth th', () => {
              let td4;
              
              beforeEach(() => {
                td4 = tds.at(3);
              });
        
              it('should render player age "25"', () => {
                expect(td4.text()).toEqual('25');
              });
            });
          });
        });
      });
    });
  });
});
