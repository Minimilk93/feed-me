import React from 'react'

const FixtureHeader = ({ listLength, category }) => {
    return (
        <>
            <p className="accordion__trigger js-toggle__control js-toggle__state">
                <span className="accordion__title split">
                    <span className="split__title">{category}</span>
                    <b className="boost-loz">{listLength} fixtures </b>
                </span>
                <span className="accordion__icon js-ui-state">
                    <span className="accordion__icon--open">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <path
                                    d="M3 5.003L10-2l.793.793a1 1 0 0 1 0 1.414L6 5.003l4.793 4.79a1 1 0 0 1 0 1.414L10 12 3 5.003z"
                                    id="a"
                                ></path>
                            </defs>
                            <use
                                fill="#FFF"
                                fillRule="nonzero"
                                transform="matrix(0 1 1 0 7.25 4.75)"
                            ></use>
                        </svg>
                    </span>
                    <span className="accordion__icon--closed">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <path
                                    d="M3 5.003L10-2l.793.793a1 1 0 0 1 0 1.414L6 5.003l4.793 4.79a1 1 0 0 1 0 1.414L10 12 3 5.003z"
                                    id="a"
                                ></path>
                            </defs>
                            <use
                                fill="#8F9DB4"
                                fillRule="nonzero"
                                transform="rotate(-90 13.25 6)"
                            ></use>
                        </svg>
                    </span>
                </span>
            </p>
        </>
    )
}

export default FixtureHeader
