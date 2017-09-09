<script>
  const chairs = 40;
  const guests = 45;
  
  if (guests <= 40) {
  console.log("everything is good");
  }
  else if (guests > 40 && guests <=50){
    console.log("bring 10 more chairs");
    console.log(chairs + 10);
  }
  else if (guests > 50 && guests <=60){
    console.log("bring 20 more chairs");
        console.log(chairs + 20);
  }
  else {
    console.log ("close the doors and remove all chairs");
    console.log (chairs - 40);
  }
  
  
</script>
