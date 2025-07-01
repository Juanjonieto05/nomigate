import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await sendgrid.send({
        to: req.body.email,
        from: 'noreply@nomigate.com',
        subject: 'Recibo de Nómina',
        text: 'Adjunto encontrará su recibo',
        attachments: [{
          content: req.body.pdfBase64,
          filename: 'recibo.pdf',
          type: 'application/pdf',
          disposition: 'attachment'
        }]
      });
      res.status(200).json({ message: 'Correo enviado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
