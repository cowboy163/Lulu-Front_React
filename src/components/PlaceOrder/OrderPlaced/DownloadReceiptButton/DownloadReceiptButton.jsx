import jsPDF from "jspdf";
// import {useRef} from "react";
// import ReceiptTemplate from "./ReceiptTemplate/ReceiptTemplate";

const DownloadReceiptButton = ({receiptRef}) => {
    // const receiptRef = useRef(null)

    const handleGeneratePdf = () => {
        let width = receiptRef.current.offsetWidth
        let height = receiptRef.current.offsetHeight
        const doc = new jsPDF({
            // orientation: 'landscape',
            format: [width, height],
            // format: 'a4',
            unit: 'px',
        })

        // Adding the fonts
        // console.log('font list check ===> ',doc.getFontList())
        doc.setFont('courier', 'normal')

        doc.html(receiptRef.current, {
            async callback(doc) {
                await doc.save('document')
            }
        })
    }

    return(
        <div>
            <button className='downloadReceiptBtn' onClick={() => handleGeneratePdf()}
                    style={{
                        backgroundColor: 'red',
                        borderRadius: '3px',
                        color: 'white',
                        cursor: 'pointer',
                        border: 'none',
                        padding: '0.5rem'
            }}
            >
                Download Receipt
            </button>
        </div>
    )
}
export default DownloadReceiptButton