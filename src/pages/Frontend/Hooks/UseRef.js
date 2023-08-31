import React, { useRef } from 'react'
import audio from '../../../assets/audios/notification.mp3'

export default function UseRef() {

    const audioPlayer = useRef(null)

    const playAudio = () => {
        audioPlayer.current.play();
    }

    const focusInput = useRef();
    const handleFocus = () => {
        focusInput.current.focus();
    }
    return (
        <>
            <main>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <h1 className='text-center my-4'>useRef Examples</h1>
                            <hr className='' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className='my-4'>Audio :</h1>
                            <audio src={audio} ref={audioPlayer}></audio>
                            <button className='btn btn-info' onClick={playAudio}>Click for Notification</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className='my-4'>Focus Input :</h1>
                            <input type="text" placeholder='Focus on Input' ref={focusInput} className='form-control' />
                            <button className='btn btn-info my-3' onClick={handleFocus}>Click to Focus</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
