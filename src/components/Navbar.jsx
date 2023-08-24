import { Button, Drawer, Segmented, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import "../Images/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  ToolOutlined,
  ProjectOutlined,
  AreaChartOutlined,
  ContactsOutlined,
  CloseOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let [selectedPage, setSelectedPage] = useState([]);
  let baseUrl = `/ReactPortfolio`;

  useEffect(() => {
    const skills = location.pathname;
    selectedPage = skills.split("/")[2];
    setSelectedPage(selectedPage);
  }, [location]);

  function changed(value) {
    setSelectedPage(value);
    if (value !== "resume") navigate(`${baseUrl}/${value}`);
  }

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar_container">
      <Space className="portfolio_log_image">
        <Link to={"/ReactPortfolio/home"}>
          <img src={require("../Images/Logo.png")} alt="logo" />
        </Link>
      </Space>

      <Space className="dropdown-container">
        <Space>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </Space>
        <Drawer
          title="Basic Drawer"
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"right"}
          extra={
            <Space>
              <Button
                type="text"
                style={{ color: "green", fontSize: "20px" }}
                onClick={onClose}
              >
                <CloseOutlined></CloseOutlined>
              </Button>
            </Space>
          }
        >
          <Space direction="vertical">
            <div onClick={() => changed("home")}>
              <HomeOutlined></HomeOutlined> Home
            </div>
            <div onClick={() => changed("about")}>
              <UserOutlined></UserOutlined>
              About Me
            </div>
            <div onClick={() => changed("skills")}>
              <ToolOutlined />
              Skills
            </div>
            <div onClick={() => changed("projects")}>
              {" "}
              <ProjectOutlined />
              Projects
            </div>
            <div onClick={() => changed("statistics")}>
              <AreaChartOutlined />
              Statistics
            </div>
            <div onClick={() => changed("contact")}>
              {" "}
              <ContactsOutlined></ContactsOutlined>Contact
            </div>
            <div onClick={() => changed("resume")}>
              <DatabaseOutlined />
              Resume
            </div>
          </Space>
        </Drawer>
      </Space>
      <Space direction="vertical" className="navbar-elements-space">
        <Segmented
          value={selectedPage}
          className="custom-segmented"
          onChange={changed}
          options={[
            {
              label: <div>Home</div>,
              value: "home",
            },
            {
              label: <div>About Me</div>,
              value: "about",
            },
            {
              label: <div>Skills</div>,
              value: "skills",
            },
            {
              label: <div>Projects</div>,
              value: "projects",
            },
            {
              label: <div>Statistics</div>,
              value: "statistics",
            },
            {
              label: <div>Contact</div>,
              value: "contact",
            },
            {
              label: <div>Resume</div>,
              value: "resume",
            },
          ]}
        />
      </Space>
    </div>
  );
};

export default Navbar;
