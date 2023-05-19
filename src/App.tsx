import { useState } from 'react';
import { Dialog, Menu } from '@headlessui/react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Menu>
        <Menu.Button>Open dropdown</Menu.Button>
        <Menu.Items unmount={false}>
          <Menu.Item as="div">
            <button type="button" onClick={() => setOpen(true)}>Open dialog</button>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              // onKeyDown={(event) => event.stopPropagation()}
            >
              <Dialog.Panel>
                <form action="#">
                  <label htmlFor="input">Broken input</label>
                  <input
                    id="input"
                    name="input"
                    type="text"
                    placeholder='Type space characters'
                    // onKeyDown={(event) => event.stopPropagation()}
                  />
                  <button type="submit">Submit</button>
                </form>
              </Dialog.Panel>
            </Dialog>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default App;
