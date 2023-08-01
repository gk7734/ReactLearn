import {Background, LoadingText} from './Styles';
import Spinner from '../ui/assets/spinner.gif';

function Loading() {
    return (
        <Background>
            <img src={Spinner} alt="로딩중" width="5%" />
            <LoadingText>Loading...</LoadingText>
        </Background>
    )
}

export default Loading;