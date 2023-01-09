const ReceiptTemplate = () => {
    // ========== style ==========
    const body = {
        fontSize: "12px",
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
        color: '#000000',
        margin: '0 auto',
        position: 'relative',
        textAlign: 'left'
    }
    const pspdfkit_header = {
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        flexWrap: 'wrap',
        color: '#717885',
        marginTop: '40px',
        marginBottom: '40px',
        width: '100%',
    }
    const header_columns = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '40px',
        paddingRight: '40px'
    }
    const logotype = {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '700'
    }
    const h2 = {
        fontFamily: 'monospace, sans-serif',
        fontSize: '20px',
    }
    const h4 = {
        fontFamily: 'monospace, sans-serif',
        fontSize: '16px',
    }
    const page = {
        marginLeft: '80px',
        marginRight: '80px',
        pageBreakAfter: 'always'
    }
    const intro_table = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '48px 0 48px 0',
        borderTop: '1px solid #000000',
        borderBottom: '1px solid #000000'
    }
    const intro_form = {
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #000000',
        width: '50%'
    }
    const intro_form_lastChild = {
        borderRight: 'none'
    }
    const intro_table_title = {
        fontSize: '0.625rem',
        margin: '0'
    }
    const intro_form_item = {
        padding: '1.25rem 1.5rem 1.25rem 1.5rem'
    }
    const intro_form_item_firstChild = {
        paddingLeft: '0'
    }
    const intro_form_item_lastChild = {
        paddingRight: '0'
    }
    const intro_form_item_border = {
        padding: '1.25rem 0 0.75rem 1.5rem',
        borderBottom: '1px solid #000000'
    }
    const intro_form_item_border_lastChild = {
        borderBottom: 'none'
    }
    const form = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '6rem'
    }
    const border = {
        border: '1px solid #000000'
    }
    const border_bottom = {
        border: '1px solid #000000',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none'
    }
    const signer = {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2.5rem',
        margin: '2rem 0 2rem 0'
    }
    const signer_item = {
        flexGrow: '1'
    }
    const input = {
        color: '#4537de',
        // textAlign: 'center',
        marginTop: '1.5rem',
        height: '4rem',
        width: '100%',
        boxSizing: 'border-box'
    }
    // const input_date_or_notes = {
    //     textAlign: 'left'
    // }
    const input_signature = {
        height: '8rem'
    }
    const tableBox_table_or_summaryBox_table = {
        width: '100%',
        fontSize: '0.625rem'
    }
    const tableBox_table = {
        paddingTop: '2rem'
    }
    const tableBox_td_firstChild_or_summaryBox_td_firstChild = {
        width: '50%'
    }
    const tableBox_td_lastChild_or_summaryBox_td_lastChild = {
        textAlign: 'right'
    }
    const tableBox_table_trClassHeading_td = {
        borderTop: '1px solid #000000',
        borderBottom: '1px solid #000000',
        height: '1.5rem'
    }
    const tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td = {
        borderBottom: '1px solid #d7dce4',
        height: '1.5rem'
    }
    const summaryBox_table_trAndClassTotal_td = {
        borderTop: '1px solid #000000',
        borderBottom: '1px solid #000000',
        height: '1.5rem'
    }
    const pspdfkit_footer = {
        fontSize: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '500',
        color: '#717885',
        marginTop: '2.5rem',
        bottom: '2.5rem',
        // position: 'absolute',
        width: '100%',
        // backgroundColor: 'orange',
        display: 'block'
    }
    const footerColumns = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem'
    }


    return (
        <div style={body}>
            <div id="pspdfkit-header"
                 style={pspdfkit_header}
            >
                <div className="header-columns"
                     style={header_columns}
                >
                    <div className="logotype" style={logotype}>
                        {/*<img className="logo" src="logo.svg"/>*/}
                        <p>Lululemon</p>
                    </div>

                    <div>
                        <p style={{
                            // width: '200px'
                        }}>[Canadian multinational athletic apparel retailer]</p>
                    </div>
                </div>
            </div>

            <div className="page"
                 style={page}
                // style="page-break-after: always"
            >
                <div>
                    <h2 style={h2}>Invoice #</h2>
                </div>

                <div className="intro-table" style={intro_table}>
                    <div className="intro-form intro-form-item"
                         style={{...intro_form, ...intro_form_item, ...intro_form_item_firstChild, ...intro_form_item_lastChild}}>
                        <p className="intro-table-title" style={intro_table_title}>Billed To:</p>
                        <p>
                            Company Ltd.<br/>
                            Address<br/>
                            Country<br/>
                            VAT ID: ATU12345678
                        </p>
                    </div>

                    <div className="intro-form" style={{...intro_form, ...intro_form_lastChild}}>
                        <div className="intro-form-item-border" style={intro_form_item_border}>
                            <p className="intro-table-title" style={intro_table_title}>Payment Date:</p>
                            <p>November 22nd 2021</p>
                        </div>

                        <div className="intro-form-item-border"
                             style={{...intro_form_item_border, ...intro_form_item_border_lastChild}}>
                            <p className="intro-table-title" style={intro_table_title}>Payment Method:</p>
                            <p>Bank Transfer</p>
                        </div>
                    </div>
                </div>

                <div className="table-box">
                    <table cellPadding="0" cellSpacing="0"
                           style={{...tableBox_table, ...tableBox_table_or_summaryBox_table}}>
                        <tbody>
                        <tr className="heading">
                            <td style={{...tableBox_td_firstChild_or_summaryBox_td_firstChild, ...tableBox_table_trClassHeading_td}}>Description</td>
                            <td style={tableBox_table_trClassHeading_td}>QTY</td>
                            <td style={tableBox_table_trClassHeading_td}>Unit Price</td>
                            <td style={tableBox_table_trClassHeading_td}>Total</td>
                        </tr>

                        <tr className="item">
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                            <td style={{...tableBox_td_lastChild_or_summaryBox_td_lastChild, ...tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="summary-box">
                    <table cellPadding="0" cellSpacing="0" style={tableBox_table_or_summaryBox_table}>
                        <tbody>
                        <tr className="item">
                            <td style={tableBox_td_firstChild_or_summaryBox_td_firstChild}></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}>Subtotal:</td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}>Discount:</td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}>Subtotal
                                Less Discount:
                            </td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}>Tax
                                Rate:
                            </td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}>Total
                                Tax:
                            </td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="item">
                            <td></td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}>Shipping/Handling:</td>
                            <td style={tableBox_table_trAndClassItem_td_or_summaryBox_table_trAndClassItem_td}></td>
                        </tr>

                        <tr className="no-border-item">
                            <td></td>
                            <td>Total Due:</td>
                            <td></td>
                        </tr>

                        <tr className="total">
                            <td></td>
                            <td style={summaryBox_table_trAndClassTotal_td}>Amount Paid:</td>
                            <td style={{...tableBox_td_lastChild_or_summaryBox_td_lastChild, ...summaryBox_table_trAndClassTotal_td}}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="page" style={page}>
                <div>
                    <h4 style={h4}>Thank you for your purchase!</h4>
                </div>

                <div className="form" style={form}>
                    <label htmlFor="notes" className="label"> Notes: </label>
                    <input type="text" id="notes" className="border-bottom" value=""
                           style={{...border_bottom, ...input}}/>
                </div>

                <div className="signer" style={signer}>
                    <div className="form signer-item" style={{...form, ...signer_item}}>
                        <label htmlFor="date" className="label">Date:</label>
                        <input type="text" id="date" className="border-bottom" value="01/01/2021"
                               style={{...border_bottom, ...input}}/>
                    </div>

                    <div className="form signer-item" style={{...form, ...signer_item}}>
                        <label htmlFor="signature" className="label">Issued by:</label>
                        <input type="text" id="signature" className="border" value="Sign Here"
                               style={{...border, ...input, textAlign: 'center', ...input_signature}}/>
                    </div>
                </div>
            </div>

            <div id="pspdfkit-footer" style={pspdfkit_footer}>
                <div className="footer-columns" style={footerColumns}>
                    <span>Invoice</span>
                    <span>Page 1 of 1</span>
                </div>
            </div>


        </div>

    )
}
export default ReceiptTemplate