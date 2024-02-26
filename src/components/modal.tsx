import { X } from 'lucide-react'
import { ReactNode, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const ref = useRef(null)

  useOnClickOutside(ref, onClose)

  return (
    <>
      {isOpen && (
        <section className="min-h-screen w-full flex justify-center items-center fixed bg-black bg-opacity-30 top-0 left-0 rounded-md">
          <main>
            <div
              ref={ref}
              className="bg-white size-[750px] rounded-md shadow-md relative"
            >
              <button onClick={onClose} className="absolute right-4 top-4 z-10">
                <X size={24} />
              </button>

              {children}
            </div>
          </main>
        </section>
      )}
    </>
  )
}
