package com.piesat.project.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;


@TableName("guan_li")
public class GuanLiBean {
    @TableId
    private Long feedId;
    private String title;
    private String webviewUrl;
    private String shareUrl;
    private String summary;

    public Long getFeedId() {
        return feedId;
    }

    public void setFeedId(Long feedId) {
        this.feedId = feedId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWebviewUrl() {
        return webviewUrl;
    }

    public void setWebviewUrl(String webviewUrl) {
        this.webviewUrl = webviewUrl;
    }

    public String getShareUrl() {
        return shareUrl;
    }

    public void setShareUrl(String shareUrl) {
        this.shareUrl = shareUrl;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }


}
