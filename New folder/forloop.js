// for loop - executes a code in limited amount of time unlike while loop
//continue - leaves the num and prints rest
//break - prints the number before break and leaves the rest
for(let i=0;i<=2;i++){
    console.log("hello "+i);
}

for(let j=2;j<=10;j+=2){
    console.log(j);
}

for(let k=10;k>0;k--){
    console.log(k);
}
console.log(`Happy New Year`);

for(let l=10;l>0;l-=3){
    console.log(l);
}

for(let m=1;m<=10;m++){
    if(m==7){
        continue;
    } else {
        console.log(m);
    }
}

for(let n=1;n<=10;n++){
    if(n==7){
       break;
    } else {
        console.log(n);
    }
}

for(let p=10;p>=1;p--){
    if(p==7){
       continue;
    } else {
        console.log(p);
    }
}

for(let q=10;q>=1;q--){
    if(q==7){
       break;
    } else {
        console.log(q);
    }
}