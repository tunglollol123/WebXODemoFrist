var plr = 1;
export class Table
{
    constructor(Size)
    {
        this.S = Size;
    }


    
    CreateTable()
    {
        
        const Table = document.createElement("Table");
        const tBody = document.createElement("tbody");

        Table.appendChild(tBody);
        for (let index = 0; index < this.S; index++) {
            const TR = document.createElement("tr");
            
            for (let index = 0; index < this.S; index++) {
                const Td = document.createElement("Td");
                TR.appendChild(Td);
                
                Td.onclick = function() {
                    plr += 1;
                    console.log(plr);
                    if (Td.innerHTML == ""){
                        console.log(plr);
                        if ((plr)%2 != 0)
                        {
                            Td.innerHTML = "O";
                            console.log(plr);
                            
                            }else if ((plr)/2){
                            Td.innerHTML = "X";
                            console.log(plr);
                        };
                        console.log(plr);
                    };
                };
            };

            tBody.appendChild(TR);

        }
        console.log(Table)
        return Table;
    }
    

}

