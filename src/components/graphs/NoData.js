
import {NoDataBlock, NoData as NData, NoDataMessage} from '../../styles/graphStyle.js'

const NoData = ({isOpen}) => {
    return (
        <NoDataBlock>
            <NData onClick={()=>isOpen(true)} >

                <NoDataMessage >
                    No Data
                </NoDataMessage>
            </NData>
        </NoDataBlock>
    )
}

export default NoData
