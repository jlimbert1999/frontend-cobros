import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {
  Content,
  TDocumentDefinitions,
  Table,
  TableCell,
} from 'pdfmake/interfaces';
import { action, client } from 'src/app/consumer/interfaces';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
export function createInvoice(client: client) {
  const total = client.actions.reduce(
    (acc, current) => (acc = acc + current.cost),
    0
  );
  const detailsTable: TableCell[][] = client.actions.map((el) => [
    { text: el.code },
    { text: el.address },
    { text: el.cost },
  ]);
  const docDefinition: TDocumentDefinitions = {
    pageSize: 'LETTER',
    pageMargins: [30, 30, 30, 30],
    content: [
      {
        text: 'RECIBO: CREACION DE USUARIO\n\n',
        style: 'header',
      },
      {
        alignment: 'center',
        text: [
          'NOMBRE  COMPLETO:',
          {
            text: `${client.firstname} ${client.lastname} ${client.middlename}\n\n`.toUpperCase(),
            bold: false,
          },
          'TELEFONO: ',
          {
            text: `${client.phone}\n\n`,
            bold: false,
          },
          'DNI: ',
          {
            text: `${client.dni}`,
            bold: false,
          },
        ],
      },
      {
        text: `\n\n TOTAL A PAGAR: ${total} Bs.`,
        bold: true,
        alignment: 'center',
      },
      { text: `\nACCIONES ADQUIRIDAS: ${client.actions.length}` },
      {
        style: 'tableExample',
        margin: [0, 20, 0, 0],
        table: {
          widths: [100, '*', 100],
          body: [['CODIGO', 'DIRECCION', 'PRECIO EN BS.'], ...detailsTable],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
      },
    },
  };
  pdfMake.createPdf(docDefinition).print();
}
