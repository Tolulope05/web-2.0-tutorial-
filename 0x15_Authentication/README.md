# AUTHENTICATION FROM SCRATCH

### CRYPTOGRAPHIC HASH FUNCTION SUITABLE FOR PASSWORDS
> Secure Hash Algorithm 256
> e.g : password > 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
> One way function which is infeasible to invert
> Small change in input yields big change in output - the avalanche effect
> Deterministic - Same input yields same output everytime
> Unlikely to find two inputs that yields same output - Collision unimaginably low
> Passwords Hash Functions are considerably slow

### PASSWORD SALT
> People use the same password ofte from one application to another 
> We include a random values we hash with that password

### BCRYPT
> Our Password hash function
> 