export class Message
{
    pfp="assets/icons/amongus.png";
    username="romeo"; 
    message='it s so pointless though rbo ltierally 99% of the time they go like "no i cant eat that it goes ove rthe 4 calories per hour htat im allowed to cosnume"';

    constructor(username: string, message: string, pfp:string){
        this.username = username;
        this.message = message;
        this.pfp = pfp
    }

}