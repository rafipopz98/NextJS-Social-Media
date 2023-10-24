"use client";
import React, { useState } from "react";

import "./Chat.css";
const page = () => {
  const [sidebarProfileActive, setSidebarProfileActive] = useState(false);
  const [conversationActive, setConversationActive] = useState(
    "conversation-default"
  );

  const handleSidebarProfileClick = () => {
    setSidebarProfileActive(!sidebarProfileActive);
  };

  const handleConversationItemClick = (e) => {
    e.preventDefault();
    document.querySelectorAll(".conversation").forEach((conversation) => {
      conversation.classList.remove("active");
    });
    document
      .querySelector(e.target.dataset.conversation)
      .classList.add("active");
    setConversationActive(e.target.dataset.conversation);
  };

  return (
    <section className="chat-section">
      <div className="chat-container">
        <aside className="chat-sidebar">
          <a href="#" className="chat-sidebar-logo">
            <i className="ri-chat-1-fill"></i>
          </a>
          <ul className="chat-sidebar-menu">
            <li className="active">
              <a href="#" data-title="Chats">
                <i className="ri-chat-3-line"></i>
              </a>
            </li>
            <li>
              <a href="#" data-title="Contacts">
                <i className="ri-contacts-line"></i>
              </a>
            </li>
            <li>
              <a href="#" data-title="Documents">
                <i className="ri-folder-line"></i>
              </a>
            </li>
            <li>
              <a href="#" data-title="Settings">
                <i className="ri-settings-line"></i>
              </a>
            </li>
            <li className="chat-sidebar-profile">
              <button type="button" className="chat-sidebar-profile-toggle">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </button>
              <ul className="chat-sidebar-profile-dropdown">
                <li>
                  <a href="#">
                    <i className="ri-user-line"></i> Profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-logout-box-line"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside>

        <div className="chat-content">
          <div className="content-sidebar">
            <div className="content-sidebar-title">Chats</div>
            <form action="" className="content-sidebar-form">
              <input
                type="search"
                className="content-sidebar-input"
                placeholder="Search..."
              />
              <button type="submit" className="content-sidebar-submit">
                <i className="ri-search-line"></i>
              </button>
            </form>
            <div className="content-messages">
              <ul className="content-messages-list">
                <li className="content-message-title">
                  <span>Recently</span>
                </li>
                <li>
                  <a href="#" data-conversation="#conversation-1">
                    <img
                      className="content-message-image"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <span className="content-message-info">
                      <span className="content-message-name">Someone</span>
                      <span className="content-message-text">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </span>
                    <span className="content-message-more">
                      <span className="content-message-unread">5</span>
                      <span className="content-message-time">12:30</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" data-conversation="#conversation-2">
                    <img
                      className="content-message-image"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <span className="content-message-info">
                      <span className="content-message-name">Someone</span>
                      <span className="content-message-text">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </span>
                    <span className="content-message-more">
                      <span className="content-message-time">12:30</span>
                    </span>
                  </a>
                </li>
              </ul>
              <ul className="content-messages-list">
                <li className="content-message-title">
                  <span>Recently</span>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="content-message-image"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <span className="content-message-info">
                      <span className="content-message-name">Someone</span>
                      <span className="content-message-text">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </span>
                    <span className="content-message-more">
                      <span className="content-message-unread">5</span>
                      <span className="content-message-time">12:30</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      className="content-message-image"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <span className="content-message-info">
                      <span className="content-message-name">Someone</span>
                      <span className="content-message-text">
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </span>
                    <span className="content-message-more">
                      <span className="content-message-time">12:30</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="conversation conversation-default active">
            <i className="ri-chat-3-line"></i>
            <p>Select chat and view conversation!</p>
          </div>
          <div className="conversation" id="conversation-1">
            <div className="conversation-top">
              <button type="button" className="conversation-back">
                <i className="ri-arrow-left-line"></i>
              </button>
              <div className="conversation-user">
                <img
                  className="conversation-user-image"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div />
                <div className="conversation-user-name">Someone</div>
                <div className="conversation-user-status online">online</div>
              </div>
            </div>
            <div className="conversation-buttons">
              <button type="button">
                <i className="ri-phone-fill"></i>
              </button>
              <button type="button">
                <i className="ri-vidicon-line"></i>
              </button>
              <button type="button">
                <i className="ri-information-line"></i>
              </button>
            </div>
          </div>
          <div className="conversation-main">
            <ul className="conversation-wrapper">
              <div className="coversation-divider">
                <span>Today</span>
              </div>
              <li className="conversation-item me">
                <div className="conversation-item-side">
                  <img
                    className="conversation-item-image"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="conversation-item-content">
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Amet natus repudiandae quisquam sequi nobis
                          suscipit consequatur rerum alias odio repellat!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eaque, tenetur!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="conversation-item">
                <div className="conversation-item-side">
                  <img
                    className="conversation-item-image"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="conversation-item-content">
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Atque eos ab in?
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint, debitis. Iste natus est aliquam ipsum
                          doloremque fugiat, quidem eos autem? Dolor quisquam
                          laboriosam enim cum laborum suscipit perferendis
                          adipisci praesentium.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="conversation-item me">
                <div className="conversation-item-side">
                  <img
                    className="conversation-item-image"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="conversation-item-content">
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quas, eos, magni temporibus, placeat consectetur
                          nobis incidunt dicta a culpa vel esse. Facilis fugiat
                          possimus eveniet accusamus dignissimos pariatur
                          inventore animi rem vero, eligendi obcaecati fugit
                          quaerat? Officia ex quod eaque maxime ipsam, tempore
                          error laboriosam laborum, magnam ipsum doloremque
                          quas.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus debitis odio maiores perferendis ipsa
                          repudiandae amet blanditiis quod. Ullam, dolorum.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Accusantium blanditiis ea, voluptatum, eveniet
                          at harum minima maxime enim aut non, iure expedita
                          excepturi tempore nostrum quasi natus voluptas dolore
                          ducimus!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="conversation-form">
            <button type="button" className="conversation-form-button">
              <i className="ri-emotion-line"></i>
            </button>
            <div className="conversation-form-group">
              <textarea
                className="conversation-form-input"
                rows="1"
                placeholder="Type here..."
              ></textarea>
              <button type="button" className="conversation-form-record">
                <i className="ri-mic-line"></i>
              </button>
            </div>
            <button
              type="button"
              className="conversation-form-button conversation-form-submit"
            >
              <i className="ri-send-plane-2-line"></i>
            </button>
          </div>
        </div>
        <div className="conversation" id="conversation-2">
          <div className="conversation-top">
            <button type="button" className="conversation-back">
              <i className="ri-arrow-left-line"></i>
            </button>
            <div className="conversation-user">
              <img
                className="conversation-user-image"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div>
                <div className="conversation-user-name">Someone 1</div>
                <div className="conversation-user-status online">online</div>
              </div>
            </div>
            <div className="conversation-buttons">
              <button type="button">
                <i className="ri-phone-fill"></i>
              </button>
              <button type="button">
                <i className="ri-vidicon-line"></i>
              </button>
              <button type="button">
                <i className="ri-information-line"></i>
              </button>
            </div>
          </div>
          <div className="conversation-main">
            <ul className="conversation-wrapper">
              <div className="coversation-divider">
                <span>Today</span>
              </div>
              <li className="conversation-item me">
                <div className="conversation-item-side">
                  <img
                    className="conversation-item-image"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="conversation-item-content">
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Amet natus repudiandae quisquam sequi nobis
                          suscipit consequatur rerum alias odio repellat!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Eaque, tenetur!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="conversation-item">
                <div className="conversation-item-side">
                  <img
                    className="conversation-item-image"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="conversation-item-content">
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Atque eos ab in?
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sint, debitis. Iste natus est aliquam ipsum
                          doloremque fugiat, quidem eos autem? Dolor quisquam
                          laboriosam enim cum laborum suscipit perferendis
                          adipisci praesentium.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="conversation-item me">
                <div className="conversation-item-side">
                  <img
                    className="conversation-item-image"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <div className="conversation-item-content">
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quas, eos, magni temporibus, placeat consectetur
                          nobis incidunt dicta a culpa vel esse. Facilis fugiat
                          possimus eveniet accusamus dignissimos pariatur
                          inventore animi rem vero, eligendi obcaecati fugit
                          quaerat? Officia ex quod eaque maxime ipsam, tempore
                          error laboriosam laborum, magnam ipsum doloremque
                          quas.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus debitis odio maiores perferendis ipsa
                          repudiandae amet blanditiis quod. Ullam, dolorum.
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-item-wrapper">
                    <div className="conversation-item-box">
                      <div className="conversation-item-text">
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Accusantium blanditiis ea, voluptatum, eveniet
                          at harum minima maxime enim aut non, iure expedita
                          excepturi tempore nostrum quasi natus voluptas dolore
                          ducimus!
                        </p>
                        <div className="conversation-item-time">12:30</div>
                      </div>
                      <div className="conversation-item-dropdown">
                        <button
                          type="button"
                          className="conversation-item-dropdown-toggle"
                        >
                          <i className="ri-more-2-line"></i>
                        </button>
                        <ul className="conversation-item-dropdown-list">
                          <li>
                            <a href="#">
                              <i className="ri-share-forward-line"></i> Forward
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="ri-delete-bin-line"></i> Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="conversation-form">
            <button type="button" className="conversation-form-button">
              <i className="ri-emotion-line"></i>
            </button>
            <div className="conversation-form-group">
              <textarea
                className="conversation-form-input"
                rows="1"
                placeholder="Type here..."
              ></textarea>
              <button type="button" className="conversation-form-record">
                <i className="ri-mic-line"></i>
              </button>
            </div>
            <button
              type="button"
              className="conversation-form-button conversation-form-submit"
            >
              <i className="ri-send-plane-2-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;