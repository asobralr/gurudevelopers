import { sendEmail } from '@/src/api/sendEmail'

const handler = async (req, res) => {
  try {
    const { method } = req
    switch (method) {
      case 'POST': {
        const { to, subject, body, htmlBody } = req.body

        console.log(req.body)
        if (!to || !subject || !body || !htmlBody) {
          return res.status(400).json({
            error_code: 'missing_parameters',
            message: 'Missing required parameters in the request body.'
          })
        }
        await sendEmail(to, subject, body, htmlBody)
        res.status(200).send({ ok: true, message: 'Success' })
        break
      }
      case 'GET': {
        res.status(200).send(req.auth_data)
        break
      }
      default:
        res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} Not Allowed`)
        break
    }
  } catch (err) {
    res.status(400).json({
      error_code: 'api_one',
      message: err.message
    })
  }
}

export default handler
