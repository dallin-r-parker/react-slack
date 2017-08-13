import React from 'react';
import './CreateChannel.css';

export default function CreateChannel(props) {
  props.value ? console.log('hasVal') : console.log('noVal: ');
  console.log('propsChannel: ', props);
  const handleCancel = () => props.action();
  const handleCreate = () => props.add();

  const channelInput = e => {
    props.newChannel(e.target.value);
  };

  return (
    <modal className="create-channel-container">
      <section className="channel-wrap">
        <div className="esc-wrap" onClick={handleCancel}>
          <i className="fa fa-times" aria-hidden="true">
            {/* */}
          </i>
          <esc>esc</esc>
        </div>
        <h2>Create a private channel</h2>
        <h5>
          Channels are where your team communicates. They're best when organized
          around a topic - #leads, for example
        </h5>
        <p>Name</p>
        <input
          type="text"
          onChange={e => channelInput(e)}
          placeholder="e.g. leads"
        />

        <p>Purpose</p>
        <input type="text" />

        <div className="btn-wrap">
          <button onClick={handleCancel}>Cancel</button>
          <button
            onClick={handleCreate}
            style={
              props.value
                ? { background: '#2AB27B' }
                : { background: '#CDCECE' }
            }
          >
            Create channel
          </button>
        </div>
      </section>
    </modal>
  );
}
