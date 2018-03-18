package com.piesat.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ListDataBean {

    private int rtn;
    private DataBean data;

    public int getRtn() {
        return rtn;
    }

    public void setRtn(int rtn) {
        this.rtn = rtn;
    }

    public DataBean getData() {
        return data;
    }

    public void setData(DataBean data) {
        this.data = data;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class DataBean {
        private String preview_title;
        private int product_id;
        private int login_user_id;
        private PayPageBean pay_page;
        private List<GuanLiBean> list;
        private List<String> preview_list;

        public String getPreview_title() {
            return preview_title;
        }

        public void setPreview_title(String preview_title) {
            this.preview_title = preview_title;
        }

        public int getProduct_id() {
            return product_id;
        }

        public void setProduct_id(int product_id) {
            this.product_id = product_id;
        }

        public int getLogin_user_id() {
            return login_user_id;
        }

        public void setLogin_user_id(int login_user_id) {
            this.login_user_id = login_user_id;
        }

        public PayPageBean getPay_page() {
            return pay_page;
        }

        public void setPay_page(PayPageBean pay_page) {
            this.pay_page = pay_page;
        }

        public List<GuanLiBean> getList() {
            return list;
        }

        public void setList(List<GuanLiBean> list) {
            this.list = list;
        }

        public List<String> getPreview_list() {
            return preview_list;
        }

        public void setPreview_list(List<String> preview_list) {
            this.preview_list = preview_list;
        }

        @JsonIgnoreProperties(ignoreUnknown = true)
        public static class PayPageBean {
            private String image_url;
            private String title;
            private String content;
            private String btn;
            private String show_event_id;
            private String click_event_id;

            public String getImage_url() {
                return image_url;
            }

            public void setImage_url(String image_url) {
                this.image_url = image_url;
            }

            public String getTitle() {
                return title;
            }

            public void setTitle(String title) {
                this.title = title;
            }

            public String getContent() {
                return content;
            }

            public void setContent(String content) {
                this.content = content;
            }

            public String getBtn() {
                return btn;
            }

            public void setBtn(String btn) {
                this.btn = btn;
            }

            public String getShow_event_id() {
                return show_event_id;
            }

            public void setShow_event_id(String show_event_id) {
                this.show_event_id = show_event_id;
            }

            public String getClick_event_id() {
                return click_event_id;
            }

            public void setClick_event_id(String click_event_id) {
                this.click_event_id = click_event_id;
            }
        }

    }
}
