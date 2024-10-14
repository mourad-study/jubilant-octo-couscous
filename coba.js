var jmlruangan = 9
var klsberfungsi = 5
var noruangan = 1


while(noruangan <= klsberfungsi){
    console.log(`ruangan ${noruangan} tidak dipakai`)
    noruangan++;
}

for(var noruangan= noruangan+1;
    noruangan<=jmlruangan;noruangan++)
{console.log(`ruang ${noruangan} dipakai`)}