**ONLY IN CATALAN**
Crearem una web d'acudits, consumint dades d'una API gratuïta que no requereix clau. Veuràs que és molt divertit i interessant poder aconseguir dades d'una API, imagina la quantitat de webs que pots fer!

En l'àmbit professional, quan treballis en un projecte, l'empresa normalment té un back end amb una documentació per a poder obtenir les dades. Sovint, una web o app no només té una font de dades, també és comú utilitzar APIs de tercers. Resumint, saber consumir dades d'una API és una de les skills més importants d'un programador/a front end!

A continuació es mostren enllaços i informació que poden ser d'utilitat per implementar les crides API a la teva web:

- La documentació de l'API a consumir és la següent:

https://icanhazdadjoke.com/api

- Crida per a obtenir un acudit:

https://icanhazdadjoke.com/

-   Header per a obtenir les dades en el format que ens interessa:

'Accept': 'application/json'

Posem aquest header en l'anomenada API perquè el servidor sàpiga en quin format volem les dades, en el nostre cas en JSON.

Ens hem inventat aquest header? No, ho hem extret de la documentació d'aquesta API-> https://icanhazdadjoke.com/api. 

Les APIs les crearan programadors de back end, deixant sempre documentat tot perquè els programadors de front end o altres programadors back end d'altres empreses puguin consumir les dades.

Simplificant, diguem que l'URL de l'API que introduïm en aquest projecte és on consumirem les dades, i el header és com volem les dades.

Notes
A continuació tens les indicacions del responsable front end:

- És obligatori implementar tots els bucles i lògica amb ES6 (usant map, reduce, filter i sort per a manipular arrays). En cap cas podràs utilitzar el bucle for.

- Encara que és molt recomanable fer servir TypeScript en aquest lliurament, si vas una mica just de temps, pots fer servir JavaScript.


LEVEL1

 - Exercici 1
En aquest primer exercici crearem la pantalla principal que mostrarà acudits a l'usuari/ària.

El funcionament ha de ser el següent:

- En entrar no mostrarà cap acudit. Apareixerà el títol i el botó de següent acudit.

- En prémer el botó de “Següent acudit” es farà fetch a l'API d'acudits i es mostrarà per consola l'acudit en qüestió.

Nota: En aquest exercici no és necessari maquetar la web, primer farem que funcioni per a passar a aplicar-li els estils.

 Ajuda

Tip 1: fer servir promises o async/await per a esperar la resposta de l'API.

Tip 2: abans de fer servir una API al codi, és recomanable fer servir Postman o eines online per a provar l'API, per exemple -> Talend API Tester - Free Edition A més de garantir que funciona, veuràs l'objecte que retorna, per a saber utilitzar-lo.

- Exercici 2
La nostra web ja obté els piuli del servidor i els vam mostrar per consola, falta mostrar-los-hi a l'usuari/ària.

Realitza una primera aproximació de la maquetació, col·locant cada element en el seu lloc. No et preocupis pels detalls, modificarem la maquetació més endavant.

L'objectiu d'aquest exercici és que l'usuari/ària pugui anar visualitzant els acudits i demanar-ne de nous.

- Exercici 3
L'empresa que encarrega el projecte necessita fer un seguiment a l'ús d'aquesta web per al seu estudi.
Per a això, es necessita saber el nivell d'acceptació dels acudits, un tracking per a saber quan els empleats estan de més bon humor, i quants acudits es consumeixen de mitjana.

Com es tradueix aquesta petició al nostre codi?

Necessitaràs generar un array anomenat reportAcudits, en el qual anirem guardant tota la informació relativa a l'acudit que ens demana el client.

Els tres camps que ha de tenir cada objecte de l'array són:

{
  joke: "...",

  score: 1,

  date: ...
}

- La data  de quan es va fer la valoració l'hauràs de guardar en format ISO.

 Per saber més

->JavaScript Date toISOString().


- El camp score té un rang de l'1 al 3, sent un 1 la pitjor puntuació. Hauràs d'implementar 3 botons entre l'acudit i el botó per a carregar el següent acudit, perquè l'usuari/ària pugui puntuar-lo. 

Amb la puntuació de l'acudit, juntament amb l'acudit i generant una data, hauràs d'anar emplenant l'array reportJokes.

Quan vagis actualitzant aquest array, mostrant per consola el seu contingut serà suficient.


LEVEL 2

- Exercici 4
BEN FET! Ja tens una web d'acudits operativa. Ara que la web està pensada per a mostrar acudits a primera hora del matí perquè comencin bé el dia, afegirem informació meteorològica, ja que els pot ser d'utilitat. 

Consumir una API d'informació meteorològica i mostrar-ho a la web. Aquesta API ha de dir-se en l'obertura, no mitjançant un botó.

Nota: Encara no és necessari maquetar la web, amb mostrar una paraula que indiqui el temps és suficient.

- Exercici 5
El client/a ens ha comunicat les primeres proves, que els usuaris/àries s'avorriran si sempre vam mostrar el mateix tipus d'acudits.

Has de buscar una altra API (o APIs) d'acudits i utilitzar-la per a alternar acudits de diferents fonts (bé alternant un de cada o de manera aleatòria).

Ajuda: Els acudits de Chuck Norris mai fallen.


LEVEL 3

- Exercici 6
Maquetar la web d'acudits i temps meteorològic.

Tens molts generadors en línia de gradients, formes, backgrounds... en aquest exemple es recomana usar aquesta eina online per a generar la base del contenidor dels acudits:

-> https://www.blobmaker.app/

Com hauràs pogut observar, en lloc de mostrar a l'usuari/ària el text del temps, el traduïm en una icona i la temperatura actual.

Ajuda: la forma bàsica del contenidor d'acudits s'ha d'implantar amb SVG.

Bonus: per a millorar l'experiència d'usuari/ària, pots tenir guardades diverses formes del contenidor (svgs en una carpeta del projecte), i quan es demani un nou acudit, canviar la classe CSS del contenidor. Amb això canviarà la forma (carregant un altre svg), sent superdinàmica i cridanera la web!