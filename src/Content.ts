/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs, { write } from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>SandBox</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        var idegallapotmero: number = 999;
        var kisebbsegiszemely: string = "Alfozno";
        var csudijo: boolean = true;
        let autok: Array<string>;
        autok = ["Lambo", "Ford", "Chevrolet"];
        enum sportcars {
            Porsche = 8,
            Rx7 = 4,
            BMW = 7,
            Ferrari = 9
        }
        let Kozso: string | number;
        Kozso = 365;
        Kozso = "CBA";
        let kiiras: any = "Szia anya!";
        kiiras = 25;
        function kozsowriter(): void {
            res.write("55535553655");
        }
        let teloszam: void = kozsowriter();

        let biblia: string = "Jézus";
        const biblia2: string = "Krisztus";

        res.write(` ${idegallapotmero} ${kisebbsegiszemely} ${csudijo} `);
        res.write(`${autok}`);
        res.write(`${sportcars.Porsche}, ${sportcars.Rx7}, ${sportcars.BMW}, ${sportcars.Ferrari} `);
        res.write(`${Kozso} ${kiiras} `);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
