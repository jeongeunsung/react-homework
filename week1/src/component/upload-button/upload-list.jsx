import { UPLOAD_STATUS } from './contants'
import UploadButton from './upload-button'

export default function UploadList({ status = UPLOAD_STATUS.IDLE }) {
  return (
    <>
      <UploadButton status={status} />
      <UploadButton status={UPLOAD_STATUS.LOADING} />
      <UploadButton status={UPLOAD_STATUS.RESOLVED} />
      <UploadButton status={UPLOAD_STATUS.REJECTED} />
      <UploadButton status={status} disabled={true} />
    </>
  )
}
